import React from 'react';
import { connect } from 'react-redux';
import * as Moods from '../static/imgs';
import { MoodImage } from './MoodImage';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
};

function CMoodCounter({ logs }) {
    console.log(logs);
    const vs = logs.filter((entry) => entry.state === 'Very Sad').length || 0;
    const s = logs.filter((entry) => entry.state === 'Sad').length || 0;
    const m = logs.filter((entry) => entry.state === 'Mediocre').length || 0;
    const h = logs.filter((entry) => entry.state === 'Happy').length || 0;
    const vh = logs.filter((entry) => entry.state === 'Very Happy').length || 0;

    return (
        <div>
            <div style={styles.container}>
                <MoodImage src={Moods.VerySad} alt="Very Sad" count={vs} />
                <MoodImage src={Moods.Sad} alt="Sad" count={s} />
                <MoodImage src={Moods.Mediocre} alt="Mediocre" count={m} />
                <MoodImage src={Moods.Happy} alt="Happy" count={h} />
                <MoodImage src={Moods.VeryHappy} alt="Very Happy" count={vh} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => state;

export const MoodCounter = connect(mapStateToProps)(CMoodCounter);
