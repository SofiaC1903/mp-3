import {StyledMain, StyledImage} from "../Root.tsx";
import styled from "styled-components";



const StyledIntro = styled.div`
    display: flex;
    text-align: left;
    margin-bottom: 2%;
    padding:0 6% 2% 4%;
`

const StyledContact = styled.div`
    padding-left: 4%;
    
    p{
        padding: 2% 0 0 2%;
    }
`

export default function Home(){
    return (
        <StyledMain>
            <title>Sofia F Resume | Home </title>
            <StyledImage src={`/images/headshot-sf.jpg`} alt={'Sofia Ford'}/>
            <StyledIntro>
                <p>My name is Sofia Ford, and I'm an undergraduate student at Boston University.
                    I'm majoring in Computer Science with the expected graduation date of May 2026. I'm looking to
                    expand my knowledge in CS through an entry-level position or internship.<br/>
                    <br/>
                    My skills include: C#, Python, Java, Matplotlib, Numpy, ArcGIS online, SQL, Oracle, OCaml,
                    Golang, Git, ArcGIS, Canva, Wix and Microsoft Office Suite. <br/>
                    <br/>
                    If you would like to learn more about me, feel free to explore my website.
                </p>
            </StyledIntro>
            <StyledContact>
                <h3>Contact Info</h3>
                <p>sofiac1903@gmail.com | scfordw@bu.edu</p>
            </StyledContact>
        </StyledMain>
    )
}