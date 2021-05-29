import React from 'react';

export function Circle({ size, text }) {
    const style = {
        parent: {
            height: size,
            width: size,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderRadius: '100%',
            lineHeight: size,
            textAlign: 'center',
            position: 'absolute',
            top: '0',
            right: '0',
        },
        child: {
            color: 'white',
        },
    };
    console.log(text);
    return (
        <div style={style.parent}>
            <div style={style.child}>
                {text === 0 ? '0' : !text ? '' : text}
            </div>
        </div>
    );
}
