import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    background-color: #fdbe7b;
    color: white;
    padding: 2%;
    text-shadow: -1px -1px 7px #f68d08;
`
export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved <Link to={`/credits`}>Credits</Link>&#169;</p>
        </StyledFooter>
    )
}