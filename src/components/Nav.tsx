import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color:  #c0d1e3;
    
    @media screen and (max-width: 1000px){
        width: 100%;
    }
`
const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 3%;
    
    @media screen and (max-width: 1000px){
        flex-direction: row;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education`}>Education</Link></li>
                <li><Link to={`/employment`}>Work Experiences</Link></li>
                <li><Link to={`/leadership`}>Leadership Experiences</Link></li>
                <li><Link to={`/certifications`}>Certifications</Link></li>
                <li><Link to={`/references`}>References</Link></li>
                <li><Link to={`/projects`}>Projects</Link></li>
            </StyledUl>
        </StyledNav>
    )
}