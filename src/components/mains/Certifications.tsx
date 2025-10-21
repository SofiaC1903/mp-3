import {StyledMain} from "../Root.tsx";

export default function Certifications() {
    return (
        <StyledMain>
            <title> Sofia F Resume | Certifications </title>
            <h3 className="certifications">Certifications</h3>
            <ul className="certifications">
                <li><strong>"Understanding Sql Using Oracle DataBase" Certification</strong><br/>
                    <img src={`/images/cert-sql-oracle.jpg`}
                         alt="Sql using Oracle Database Certification granted by the Panamanian Institue of Technology and Inovation to Sofia Ford"/>
                </li>
            </ul>
        </StyledMain>
    )
}