import React from 'react';

export function LogEntry({ state, activity }) {
    const styles = {
        VeryHappy: {
            color: 'green'
        },
        Happy: {
            color: 'lightgreen'
        },
        Mediocre: {
            color: 'blue'
        },
        Sad: {
            color: 'orange'
        },
        VerySad: {
            color: 'red'
        }
    };

    const trimmed = state.replace(/\s/g, '');
    return (
        <div>
            <div className={trimmed} style={styles[trimmed]}>{trimmed}</div>
            <div>{activity}</div>
        </div>
    );
}
