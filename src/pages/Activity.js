import React from 'react';
import { connect } from 'react-redux';
import { LogEntry, Graph } from '../components';
import { colorMap } from '../lib';

const sortByMonth = (logEntry) => {
    let byMonth = {};
    let d = new Date(logEntry.timestamp);
    d = (d.getFullYear()-1970)*12 + d.getMonth();
    byMonth[d] = byMonth[d] || [];
    byMonth[d].push(logEntry);
    return byMonth;
};

function Activity({ logs }) {
    // const { log, setLog } = logState;
    const sorted = logs.map(sortByMonth);
    const levels = logs.map((l) => colorMap[l.state.replace(/\s/g, '')].level);
    const activityDisplay = [];
    logs.forEach((logEntry) => {
        activityDisplay.push(
            <LogEntry state={logEntry.state} activity={logEntry.activity} timestamp={logEntry.timestamp} />
        );
    });
    return (
        <div>
            <div>Activity</div>
            <Graph entries={levels} />
            <div>{JSON.stringify(logs)}</div>
        </div>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Activity);