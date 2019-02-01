import React from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({theme}) => (
    <Container backgroundColor={theme.headerBackgroundColor} foreColor={theme.headerForeColor}>
        <img src={theme.logo} className="app-logo" alt="logo" />
        React Starter Kit by Josue Garcia
    </Container>
);

const Container = styled.header`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.foreColor};
`;

export default withTheme(Header);