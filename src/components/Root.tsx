import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Employment from "./mains/Employment.tsx";
import Leadership from "./mains/Leadership.tsx";
import Certifications from "./mains/Certifications.tsx";
import References from "./mains/References.tsx";
import Projects from "./mains/Projects.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: left;
    background-color: #ffefd3;
    font-size: calc(3px + 1vw);
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 80%;
    border-top: 4px solid #395c6b;
    border-bottom: 4px solid #395c6b;
    overflow: scroll;
    
    @media screen and (max-width: 1000px){
        overflow:scroll;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
`

export const StyledMain = styled.main`
    height: 100vh;
    width: 70%;

    @media screen and (max-width:1000px){
        height:100vh;
        width: 100%;
    }
`

export const StyledHeader = styled.header`
    background-color: #fdbe7b;
    color: white;
    padding: 2%;
    text-shadow: -1px -1px 7px #f68d08;

    @media screen and (max-width:1000px){
        text-align: center;
    }
`

export const StyledImage = styled.img`
    display: inline;
    max-width: 45%;
    padding: 5% 5%;
    filter: drop-shadow(-1px -1px 7px #f68d08);
`

export const StyledTitle = styled.h3`
    padding: 4% 0 0 4%;
`

export default function Root(){
    return (
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/employment`} element={<Employment/>}/>
                    <Route path={`/leadership`} element={<Leadership/>}/>
                    <Route path={`/certifications`} element={<Certifications/>}/>
                    <Route path={`/references`} element={<References/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                    <Route path={`/credits`} element={<Home/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Wrapper>
    )
}