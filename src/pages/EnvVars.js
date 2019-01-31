import React from 'react';

export default class EnvironmentVariables extends React.Component {
    render() {
        return <React.Fragment>
            <div>
                <small>You are running this application in <strong>{process.env.NODE_ENV}</strong> mode.</small>
            </div>
            <div>
                <small>Secret code is <strong>{process.env.REACT_APP_SECRET_CODE}</strong></small>
            </div>
            <div>
                <small>Api Url is <strong>{process.env.REACT_APP_API_URL}</strong></small>
            </div>
        </React.Fragment>
    }
}