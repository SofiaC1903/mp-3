import {Link} from "react-router";
import {StyledHeader} from "./Root.tsx";

export default function Footer() {
    return (
        <StyledHeader>
            <p>All rights reserved <Link to={"https://cs-people.bu.edu/scfordw/"} target={"_blank"}>Credits</Link>&#169;</p>
        </StyledHeader>
    )
}