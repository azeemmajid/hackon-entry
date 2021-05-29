import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FeelingSelector, Journal } from '../components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addLog, resetLog } from '../actions';
import { createId } from '../lib';

function FeelingInput({ dispatch }) {
    const [error, setError] = useState({});
    const [modalOpen, setModal] = useState(false);
    const [feeling, setFeeling] = useState({});
    const history = useHistory();
    // const { feeling, setFeeling } = feelingState;

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
        dispatch(addLog({
            ...feeling,
            id: createId(),
        }));
        history.push('/suggestedActivities');
    };

    const reset = () => {dispatch(resetLog())};

    useEffect(() => {
        console.log(feeling);
    }, [feeling]);

    return (
        <div>
            <button onClick={() => reset()}>DEV RESET BUTTON</button>
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

export default connect()(FeelingInput);