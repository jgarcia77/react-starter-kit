import React from 'react';
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

class Main extends React.Component {
    render() {
        return <Container backgroundColor={this.props.theme.mainBackgroundColor} foreColor={this.props.theme.mainForeColor}>
            {this.props.children}
        </Container>
    }
}

const Container = styled.main`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.foreColor};
`;

export default withTheme(Main);