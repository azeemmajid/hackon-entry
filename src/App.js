// import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import { FeelingInput, Activity } from './pages';
import './App.css';

export default function App() {
    // const [log, setLog] = useState([]);
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
                </Switch>
                {/* Journal - add activiites and write what you did */}
            </div>
        </Router>
    );
}
