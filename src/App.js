import React, {Component} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Elderly from './elderly'
import Current from './current'



class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" name="Current" component={Current} />
                    <Route exact path="/elderly" name="Elderly" component={Elderly} />
                </Switch>
            </HashRouter>
        );
    }


}

export default App;
