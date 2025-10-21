import {StyledMain, StyledImage, StyledTitle} from "../Root.tsx";
import styled from "styled-components";


const StyledList = styled.ul`
    padding: 3% 0 0 8%;
    list-style: none;
`

export default function Certifications() {
    return (
        <StyledMain>
            <title> Sofia F Resume | Certifications </title>

            <StyledTitle>Certifications</StyledTitle>
            <StyledList>
                <li><strong>"Understanding Sql Using Oracle DataBase" Certification</strong><br/>
                    <StyledImage src={`/images/cert-sql-oracle.jpg`}
                         alt="Sql using Oracle Database Certification granted by the Panamanian Institue of Technology and Inovation to Sofia Ford"/>
                </li>
            </StyledList>
        </StyledMain>
    )
}