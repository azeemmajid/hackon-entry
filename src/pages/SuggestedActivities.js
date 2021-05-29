import { connect } from 'react-redux';
import { colorMap } from '../lib';

const sortLogs = (logs) => {
	// only focused on the first few so we'll skip any older than a few weeks
	const now = Date.now();
	const d = now-14*86400;
	const datapoints = [];
	// the array will have newest data last so it makes it quicker
	for(const l of logs.reverse()) {
		if(l.timestamp >= d) {
			const trimmed = l.state.replace(/\s/g, '');
			// inserts data in [x,y] pairs (shrinks x value so we don't have to worry about big numbers)
			datapoints.push([l.timestamp-d, colorMap[trimmed].level]);
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
	if(datapoints.length > 5) return null;

	// otherwise find linear regression
	let count = 0;
	let sumX = 0;
	let sumX2 = 0;
	let sumXY = 0;
	let sumY = 0;

	for(const [i, v] of datapoints) {
		count++;
		sumX += i;
		sumX2 += i*i;
		sumXY += i*v;
		sumY += v;
	}

	const numerator = (count * sumXY) - (sumX * sumY);
	const denomenator = (count * sumX2) - (sumX*sumX);

	return numerator / denomenator;
}

const SuggestedActivities = ({ logs }) => {
	// can assume that last will always be the most recent
	const latestLog = logs[logs.length - 1];
	const trimmed = latestLog.state.replace(/\s/g, '');
	const { level } = colorMap[trimmed];

	const trend = calculateTrend(logs);

	return <div>
	{level <= 2 && <>
		<h1>You seem a little down here are some ideas to make you feel better?</h1>

	</>}
	{trend <= -2 && <>
		<h3>We noticed you have been feeling down lately. Has anything big changed in your life lately?</h3>
	</>}
	</div>
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SuggestedActivities);