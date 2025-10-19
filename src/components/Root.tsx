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


export default function Root(){
    return (
        <>
            <Header/>
            <div>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={`/education`} element={<Education/>}/>
                    <Route path={`/employment`} element={<Employment/>}/>
                    <Route path={`/leadership`} element={<Leadership/>}/>
                    <Route path={`/certifications`} element={<Certifications/>}/>
                    <Route path={`/references`} element={<References/>}/>
                    <Route path={`/projects`} element={<Projects/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}