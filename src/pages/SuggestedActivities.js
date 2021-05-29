import { connect } from 'react-redux';
import { colorMap } from '../lib';
import { setLogState } from '../actions';
import { useState, useEffect } from 'react';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const sortLogs = (logs) => {
    // only focused on the first few so we'll skip any older than a few weeks
    const now = Date.now();
    const d = now - 14 * 86400;
    const datapoints = [];
    // the array will have newest data last so it makes it quicker
    for (const l of logs.reverse()) {
        if (l.timestamp >= d) {
            const trimmed = l.state.replace(/\s/g, '');
            // inserts data in [x,y] pairs (shrinks x value so we don't have to worry about big numbers)
            datapoints.push([l.timestamp - d, colorMap[trimmed].level]);
        } else {
            // since the data is sorted newest first now, we can assume all following data is old and stop
            break;
        }
    }

    return datapoints;
};

const calculateTrend = (logs) => {
    // basically just keeps the data relevant to the last few weeks
    const datapoints = sortLogs(logs);

    // checks if there is enough data to make good assumption
    if (datapoints.length > 5) return null;

    // otherwise find linear regression
    let count = 0;
    let sumX = 0;
    let sumX2 = 0;
    let sumXY = 0;
    let sumY = 0;

    for (const [i, v] of datapoints) {
        count++;
        sumX += i;
        sumX2 += i * i;
        sumXY += i * v;
        sumY += v;
    }

    const numerator = count * sumXY - sumX * sumY;
    const denomenator = count * sumX2 - sumX * sumX;

	return numerator / denomenator;
};

const waitForResponse = async (jobId, apiKey) => {
	const resp = await fetch(`https://api.symbl.ai/v1/job/${jobId}`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${apiKey}`
		}
	});

	const jobStatus = await resp.json();

	if(jobStatus.status == "completed") {
		return true;
	} else if (jobStatus.status == "failed") {
		return false;
	} else {
		await sleep(2000);
		return waitForResponse(jobId, apiKey);
	}
}

const analyzeSentiment = async (logText, apiKey) => {
	const postText = await fetch('https://api.symbl.ai/v1/process/text', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			messages: [
				{
					payload: {
						content: logText,
						contentType: 'text/plain'
					},
				}
			]
		})
	});

	const responseJson = await postText.json();

	let responseCompleted = await waitForResponse(responseJson.jobId, apiKey);

	if(!responseCompleted) {
		return false;
	}

	const getAnalysis = await fetch(`https://api.symbl.ai/v1/conversations/${responseJson.conversationId}/messages?sentiment=true`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${apiKey}` 
		}
	});

	const analysis = await getAnalysis.json();

	return analysis;
};

const SuggestedActivities = ({ logs, symbl, dispatch }) => {
	// can assume that last will always be the most recent
	const [foundSentiment, setFoundSentiment] = useState(false);
	const latestLog = logs[logs.length - 1];
	const trimmed = latestLog.state.replace(/\s/g, '');
	const { level } = colorMap[trimmed];

	const trend = calculateTrend(logs);

	useEffect(async () => {
		// makes sure it isn't called multiple times
		if(foundSentiment === false) {
			const analysis = await analyzeSentiment(latestLog.activity, symbl.token);
			setFoundSentiment(true);
			dispatch(setLogState({ id: latestLog.id, state: analysis.messages[0].sentiment.suggested }));
		}
	})

	return (<div>
	{level <= 2 &&
		<>
			<h1>You seem a little down here are some ideas to make you feel better?</h1>
        </>
    }
    {trend <= -2 && (
        <>
            <h3>
                We noticed you have been feeling down lately. Has
                anything big changed in your life lately?
            </h3>
        </>
    )}
        </div>
    );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SuggestedActivities);
