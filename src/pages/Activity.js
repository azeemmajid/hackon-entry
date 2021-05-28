import React from 'react';
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

export function Activity({ logState }) {
    const { log, setLog } = logState;
    const sorted = log.map(sortByMonth);
    const levels = log.map((l) => colorMap[l.state.replace(/\s/g, '')].level);
    const activityDisplay = [];
    log.forEach((logEntry) => {
        activityDisplay.push(
            <LogEntry state={logEntry.state} activity={logEntry.activity} timestamp={logEntry.timestamp} />
        );
    });
    return (
        <div>
            <div>Activity</div>
            <Graph entries={levels} />
            <div>{activityDisplay}</div>
        </div>
    );
}
