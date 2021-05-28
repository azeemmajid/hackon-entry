import React from 'react';

export function LogEntry({ state, activity }) {
    return (
        <div>
            <div>{state}</div>
            <div>{activity}</div>
        </div>
    );
}
