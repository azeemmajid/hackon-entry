import React from 'react';

const FeelingButton = ({ onClick, value, feeling }) => {
    const handleClick = () => {
        const current = {
            ...feeling,
            state: value,
        };
        onClick(current);
    };
    return <button onClick={handleClick}>{value}</button>;
};

export function FeelingSelector({ feeling, setFeeling }) {
    return (
        <div>
            <h1>How are you doing today</h1>
            <div>
                <br />
                <FeelingButton
                    onClick={setFeeling}
                    value={'Very Sad'}
                    feeling={feeling}
                />
                <FeelingButton
                    onClick={setFeeling}
                    value={'Sad'}
                    feeling={feeling}
                />
                <FeelingButton
                    onClick={setFeeling}
                    value={'Mediocre'}
                    feeling={feeling}
                />
                <FeelingButton
                    onClick={setFeeling}
                    value={'Happy'}
                    feeling={feeling}
                />
                <FeelingButton
                    onClick={setFeeling}
                    value={'Very Happy'}
                    feeling={feeling}
                />
            </div>
        </div>
    );
}
