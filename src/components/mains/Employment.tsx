import {StyledMain} from "../Root.tsx";
import styled from "styled-components";

const StyledTitle = styled.h3`
    padding: 4% 0 0 4%;
`

const StyledWork = styled.div`
    padding: 4% 2%;
`
const StyledList = styled.ul`
    margin-bottom: 2%;
    list-style: none;
    
    li p{
        padding: 2% 2% 2% 5%;
    }
`

export default function Employment(){
    return (
        <StyledMain>
            <title>Sofia F Resume | Employment </title>

            <StyledTitle>Work Experience</StyledTitle>
            <StyledWork>
                <StyledList>
                    <li>
                        <strong>Panama's Ministry of Economy and Finance</strong><br/>
                        <p><em>Intern in the Computation Department</em><br/>
                            May 2025-Aug 2025<br/>
                            Panama City, Panama</p>
                    </li>
                    <li>
                        <strong>Boston University Questrom Starbucks</strong><br/>
                        <p><em>Student Front-Of-House Worker</em><br/>
                            Jun 2023-May 2025<br/>
                            Boston, MA</p>
                    </li>
                    <li>
                        <strong>Panama Canal Authority</strong><br/>
                        <p><em>Intern-Student Assistant in GIS office</em><br/>
                            Jun 2024-Aug 2024<br/>
                            Panama City, Panama</p>
                    </li>
                </StyledList>
            </StyledWork>
        </StyledMain>
    )
}