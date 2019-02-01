import React from 'react';
import { Route, withRouter} from "react-router-dom";
import Home from './pages/Home';
import EnvironmentVariables from './pages/EnvVars';

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/envvars" component={EnvironmentVariables} />
    </div>
);

export default withRouter(Routes);