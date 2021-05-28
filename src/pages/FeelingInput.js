import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FeelingSelector, Journal } from '../components';

export function FeelingInput({ feelingState, logState }) {
    const [error, setError] = useState({});
    const [modalOpen, setModal] = useState(false);
    const { feeling, setFeeling } = feelingState;
    const { log, setLog } = logState;

    const toggleErrorModal = () => {
        setModal(!modalOpen);
    };

    const handleSave = () => {
        if (!feeling.activity || !feeling.state) {
            setError({
                state: !feeling.state,
                activity: !feeling.activity,
            });
            toggleErrorModal();
            return;
        }
        setError({});
        const newLog = log.concat([feeling]);
        setLog(newLog);
    };

    useEffect(() => {
        console.log(feeling);
    }, [feeling]);

    useEffect(() => {
        console.log(log);
    }, [log]);

    return (
        <div>
            <Modal isOpen={modalOpen} onRequestClose={toggleErrorModal}>
                {error.state ? 'Feeling option is Required!' : ''}
                <br />
                {error.activity ? 'Activity field is Required!' : ''}
            </Modal>
            <FeelingSelector feeling={feeling} setFeeling={setFeeling} />
            <Journal feeling={feeling} setFeeling={setFeeling} />
            <button type="button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}
