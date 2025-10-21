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
    font-size: calc(5px + 1vw);
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100vh;
    border-top: 4px solid #395c6b;
    border-bottom: 4px solid #395c6b;
    
    @media screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`

export const StyledMain = styled.main`
    height: 100vh;
    width: 70%;
    font-size: calc(5px + 1vw);
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