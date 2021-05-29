import React from 'react';
import { connect } from 'react-redux';
import { LogEntry, Graph } from '../components';
import { colorMap } from '../lib';

const sortByMonth = (logEntry) => {
    let byMonth = {};
    let d = new Date(logEntry.timestamp);
    d = (d.getFullYear() - 1970) * 12 + d.getMonth();
    byMonth[d] = byMonth[d] || [];
    byMonth[d].push(logEntry);
    return byMonth;
};

const findStreak = (logs) => {
    let count = 0;
    for (const [i, v] of logs.entries()) {
        if (i === 0) {
            count++;
            continue;
        }

        if (v - logs[i - 1] <= 86400000) {
            count++;
        } else {
            break;
        }
    }
    return count;
};

function Activity({ logs }) {
    console.log(logs);
    // const { log, setLog } = logState;
    // const sorted = logs.map(sortByMonth);
    const levels = logs.map((l) => colorMap[l.state.replace(/\s/g, '')].level);
    const streak = findStreak(logs);
    const activityDisplay = [];
    logs.forEach((logEntry) => {
        activityDisplay.push(
            <LogEntry
                state={logEntry.state}
                activity={logEntry.activity}
                timestamp={logEntry.timestamp}
            />
        );
    });
    return (
        <div>
            <div>Activity</div>
            <div>
                <h3>Stats</h3>
                <h5>Current Streak {streak}</h5>
                <h5>{logs.length} Total Entries</h5>
            </div>
            <Graph entries={levels} />
            <div>{JSON.stringify(logs)}</div>
        </div>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Activity);
