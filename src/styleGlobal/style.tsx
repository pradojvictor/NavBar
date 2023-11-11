import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { images } from "../assets";

export const BackgroundSection = styled.section`
    background: url(${images.fundo}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        overflow-x: hidden;
    }
`;