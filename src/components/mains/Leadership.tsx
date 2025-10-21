import {StyledMain} from "../Root.tsx";
import styled from "styled-components";

const StyledTitle = styled.h3`
    padding: 3% 0 0 3%;
`

const StyledLeadership = styled.div`
    padding: 2% 4%;

   
`
const StyledList = styled.ul`
    margin-bottom: 2%;
    list-style: none;
    padding-right: 5%;
    
    li{
        padding: 2%;
    }
`

const StyledText = styled.p`
    margin: 2%;
    padding: 0 3%;
`

export default function Leadership(){
    return (
        <StyledMain>
            <title>Sofia F Resume | Leadership </title>
            <StyledTitle>Leadership Experience</StyledTitle>
            <StyledLeadership>
                <StyledList>
                    <li>
                        <strong>The BU Buzz</strong><br/>
                        <StyledText><em>Web Director</em><br/>
                            Jan 2025-Present<br/>
                            Boston, MA</StyledText>
                        <ul>
                            <li>Manage and publish daily articles on Buzz website using Wix, ensuring adherence to
                                formatting guidelines.
                            </li>
                            <li>Distribute weekly newsletters to Buzz staff using Mailchimp, providing key operational
                                updates.
                            </li>
                            <li>Assign tasks to web development team and relay inquiries from readers to directors.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Alpha Sigma Kappa – Women in Technical Studies</strong><br/>
                        <StyledText><em>Active Member - Social & Professional STEM Sorority </em><br/>
                            <em>Public Relations Chair</em><br/>
                            Feb 2023-Dec 2024<br/>
                            Boston, MA</StyledText>
                        <ul>
                            <li>Designed digital media to promote sorority events and foster sorority’s identity.</li>
                            <li>Managed digital archives for chapter and documented events with information and
                                photography.
                            </li>
                        </ul>
                    </li>
                </StyledList>
            </StyledLeadership>
        </StyledMain>
    )
}