import React from 'react';
import { Circle } from './Circle';

export function MoodImage({ src, alt, count }) {
    const style = {
        div: {
            position: 'relative',
            margin: '6vh 2vw',
        },
        image: {
            height: '50px',
            widht: '50px',
        },
    };
    console.log(count);
    return (
        <div style={style.div}>
            <img
                src={src}
                alt={alt}
                className="moodImage"
                style={style.image}
            />
            <Circle text={count} size="20px" />
        </div>
    );
}
