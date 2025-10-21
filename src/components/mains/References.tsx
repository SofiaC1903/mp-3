import {StyledMain, StyledTitle} from "../Root.tsx";
import styled from 'styled-components';


const StyledList = styled.ul`
    list-style:none;
    padding-top: 2%;
    padding-left: 4%;
    
    p{
        margin:2%;
    }
`

export default function References(){
    return (
        <StyledMain>
            <title> Sofia F Resume | References </title>

            <StyledTitle>References:</StyledTitle>
            <StyledList>
                <li><strong>Patricia Norton | Boston University Dining Service</strong><br/>
                    <p><em>Food Service Manager, Questrom School of Business Retail</em><br/>
                        <strong>Office:</strong>595 Commonwealth Avenue Boston, MA 02215<br/>
                        <strong>Phone:</strong>+1(617)353-1524</p>
                </li>
                <li><strong>Carlos Contreras | Panama Canal Authority</strong><br/>
                    <p><em>Senior GIS and IT Solutions Leader, Strategic Project Manager</em><br/>
                        <strong>Office:</strong>XC5V+QXP, Panama City, Panamá Province, Panama<br/>
                        <strong>Phone:</strong>+507-6672-2074</p>
                </li>
            </StyledList>
        </StyledMain>
    )
}