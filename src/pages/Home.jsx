import React from 'react';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <React.Fragment>
            <Link to="/envvars">Envirnment Variables</Link>
        </React.Fragment>
    }
}