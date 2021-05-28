import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { FeelingInput, Activity } from './pages';
import './App.css';

export default function App() {
    const [feeling, setFeeling] = useState({});
    const [log, setLog] = useState([]);
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <FeelingInput
                            feelingState={{ feeling, setFeeling }}
                            logState={{ log, setLog }}
                        />
                    </Route>
                    <Route path="/activity">
                        <Activity logState={{ log, setLog }} />
                    </Route>
                </Switch>
                {/* Journal - add activiites and write what you did */}
            </div>
        </Router>
    );
}
