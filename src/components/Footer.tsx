import {Link} from "react-router";
import {StyledHeader} from "./Root.tsx";

export default function Footer() {
    return (
        <StyledHeader>
            <p>All rights reserved <Link to={`/credits`}>Credits</Link>&#169;</p>
        </StyledHeader>
    )
}