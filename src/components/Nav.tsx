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
    height: 100%;
    flex-direction: column;
    
    li{
        
        width: 100%;
        padding: 3% 3%;
        
        &:hover{
            background-color: #395c6b;
        }
    }
    
    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
        flex-direction: row;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

`
export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <li><StyledLink to={`/`}>Home</StyledLink></li>
                <li><StyledLink to={`/education`}>Education</StyledLink></li>
                <li><StyledLink to={`/employment`}>Work Experiences</StyledLink></li>
                <li><StyledLink to={`/leadership`}>Leadership Experiences</StyledLink></li>
                <li><StyledLink to={`/certifications`}>Certifications</StyledLink></li>
                <li><StyledLink to={`/references`}>References</StyledLink></li>
                <li><StyledLink to={`/projects`}>Projects</StyledLink></li>
            </StyledUl>
        </StyledNav>
    )
}