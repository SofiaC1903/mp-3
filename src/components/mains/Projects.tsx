import {StyledMain} from "../Root.tsx";

export default function Projects(){
    return (
        <StyledMain>
            <title> Sofia F Resume | Projects </title>
            <h3 className="projects">Projects:</h3>

            <div id="calculator">
                <h4>Sofia's Calculator</h4>
                <div id="input">
                    <label htmlFor="one"></label><input id="one"/>
                    <label htmlFor="two"></label><input id="two"/>
                </div>
                <div id="calc-buttons">
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>**</button>
                    <button>Clear</button>
                </div>
                <div id="result">
                    <h2 id="output"></h2>
                </div>
            </div>
        </StyledMain>
    )
}