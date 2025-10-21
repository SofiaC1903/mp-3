import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #fdbe7b;
    color: white;
    padding: 2%;
    text-shadow: -1px -1px 7px #f68d08;
`

export default function Header(){

    return (
        <StyledHeader>
            <title>Sofia F Resume | Home</title>
            <h1>Sofia Ford's Resume</h1>
            <p>An online resume showing my professional progress.</p>
        </StyledHeader>
    )
}