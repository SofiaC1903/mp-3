import {StyledMain} from "../Root.tsx";
import styled from "styled-components";



const StyledTitle = styled.h3`
    padding: 4% 0 0 4%;
`

const StyledSubtitle = styled.h4`
    padding-left: 4%;
`

const StyledList = styled.div`
    list-style: none;
    padding-left: 7%;
    padding-bottom: 7%;
`

const StyledText = styled.p`
    padding-left: 4%;
`

export default function Education(){
    return (
        <StyledMain>
            <title>Sofia F Resume | Education </title>
            <StyledTitle>Educational Background</StyledTitle>
            <StyledText>
                <br/>
                <strong>Boston University - B.A. in Computer Science</strong><br/>
                Expected Graduation: May 2026<br/>
                <em>Boston, MA</em><br/>
                <br/>
            </StyledText>
            <StyledSubtitle>Honors:</StyledSubtitle>
            <StyledList>
                <ul>
                    <li>Dean's List Spring 2025</li>
                    <li>Dean's List Fall 2024</li>
                    <li>Dean's List Fall 2023</li>
                    <li>Dean's List Spring 2023</li>
                </ul>
            </StyledList>
            <StyledText><strong>Relevant Coursework:</strong> Introduction to Computer Science 1 & 2 (Data
                Structures), Combinatorics Structures, Linear Algebra, Computer Systems,Information Security, Software
                Engineering, Database Systems, Design of Programming Languages<br/>
                <br/>
                <strong>Coursework In Progress:</strong> Web Development, Distributed Systems
            </StyledText>
        </StyledMain>
    )
}