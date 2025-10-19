import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Employment from "./mains/Employment.tsx";

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
                    <Route path={`/leadership`} element={<Education/>}/>
                    <Route path={`/certifications`} element={<Education/>}/>
                    <Route path={`/references`} element={<Education/>}/>
                    <Route path={`/projects`} element={<Education/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}