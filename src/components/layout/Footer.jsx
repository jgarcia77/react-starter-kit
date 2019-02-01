import React from "react";
import styled from "styled-components";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({theme}) => (
    <Container backgroundColor={theme.footerBackgroundColor} foreColor={theme.footerForeColor}>
        Footer
    </Container>
);

const Container = styled.footer`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.foreColor};
`;

export default withTheme(Header);