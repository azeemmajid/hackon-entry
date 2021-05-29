// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './components';
import { FeelingInput, Activity, SuggestedActivities } from './pages';
import { setSymbl } from './actions';
import './App.css';

function App({ dispatch }) {
    // const [log, setLog] = useState([]);
    fetch('https://api.symbl.ai/oauth2/token:generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: 'application',
            appId: '536330366e5a7a7761337358305856504c6d544c55574d794346334d52356763',
            appSecret: '2d4b4f37394c754b6564534c4b715a4b4672704a7a585f687979754272756d6c6869486c2d4d4b42614b46666f554a7552614a663161613135556d77614a6a72',
        })
    })
    .then(resp => resp.json())
    .then(({ accessToken }) => {
        dispatch(setSymbl({ token: accessToken }));
    })
    .catch(console.log);

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <FeelingInput />
                    </Route>
                    <Route path="/activity">
                        <Activity />
                    </Route>
                    <Route path="/suggestedActivities">
                        <SuggestedActivities />
                    </Route>
                </Switch>
                {/* Journal - add activiites and write what you did */}
            </div>
        </Router>
    );
}

export default connect()(App);
