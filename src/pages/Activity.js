import React from 'react';
import { LogEntry } from '../components';

export function Activity({ logState }) {
    const { log, setLog } = logState;
    const activityDisplay = [];
    log.forEach((logEntry) => {
        activityDisplay.push(
            <LogEntry state={logEntry.state} activity={logEntry.activity} />
        );
    });
    return (
        <div>
            <div>Activity</div>
            <div>{activityDisplay}</div>
        </div>
    );
}
