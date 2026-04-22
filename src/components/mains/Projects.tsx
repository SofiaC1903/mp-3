import {StyledMain, StyledTitle} from "../Root.tsx";
import styled from "styled-components";
import Calculator from "../Calculator.tsx";
import {Link} from "react-router";

const StyledList = styled.ul`
    margin-bottom: 2%;
    list-style: none;
    padding-right: 5%;
    
    li{
        padding: 2%;
    }
`

const StyledText = styled.p`
    padding: 0 3%;
`

export default function Projects(){

    return (
        <StyledMain>
            <title> Sofia F Resume | Projects </title>

            <StyledTitle>Django Projects:</StyledTitle>
            <br/>
            <StyledList>
                <li>
                    <a href={"https://cs-webapps.bu.edu/scfordw/quotes/"} target={"_blank"}><strong>Stevie Nicks Quote of the Day</strong></a><br/>
                    <StyledText>A django app for my fullstack web development class where the user can get a randomly
                        generated image of and quote by Stevie Nicks.
                    </StyledText>
                </li>
                <li>
                    <a href={"https://cs-webapps.bu.edu/scfordw/restaurant/"} target={"_blank"}><strong>Ford's Restaurant App</strong></a><br/>
                    <StyledText>A django app to simulate a made up restaurant, called Ford's restaurant, online ordering
                        form.
                    </StyledText>
                </li>
                <li>
                    <a href={"https://cs-webapps.bu.edu/scfordw/mini_insta/"} target={"_blank"}><strong>Mini Instagram Case Study</strong></a><br/>
                    <StyledText>A django app to meant to simulate a version of Instagram so that we could learn how to use
                        Djangos built-in database and OAuth interface so that a user can create a profile, create posts,
                        follow other users, like other posts and leave comments on others posts.
                    </StyledText>
                </li>
                <li>
                    <a href={"https://cs-webapps.bu.edu/scfordw/voter_analytics/"} target={"_blank"}><strong>Newton Voter Analytics</strong></a><br/>
                    <StyledText>A django app that implements django's pagination features and uses the plotly package to
                        display information and grapg on voter's in Newton. The app loads the data from an external csv
                        file and also provides a filter utility to obtain voter's that meet the input conditions.
                    </StyledText>
                </li>
                <li>
                    <a href={"https://cs-webapps.bu.edu/scfordw/dadjokes/"} target={"_blank"}><strong>DadJokes App and API</strong></a><br/>
                    <StyledText>A django app to display randomized images and dad jokes submitted by users, with django API rest_framework to
                        implement jokes in React Native mobile app.
                    </StyledText>
                </li>
            </StyledList>
            <br/>
            <StyledTitle>React and Next.js Projects:</StyledTitle>
            <br/>
            <StyledList>
                <li>
                    <a href={"https://javajitters.vercel.app/about"} target={"_blank"}><strong>Java Jitters</strong></a><br/>
                    <StyledText>A Next.js app made with Perla Ruiz and Kyle Blackburn where Boston University Students
                    can rate the different coffees they've had around campus. We combined the skills we learned through
                    the semester to use MongoDb to store users reviews, an API to provide students with reviews of coffee
                    shops in a specified distance and Google's OAuth for students to Log-In and have a profile with their
                    reviews.</StyledText>
                </li>
                <li>
                    <a href={"https://scfw-mp-2.vercel.app/"} target={"_blank"}><strong>Amiibo API App</strong></a><br/>
                    <StyledText>React app created for my Software Development class where user can type name of
                    amiibo character into search bar and get back all versions of the character and their information.
                    Sadly, the API no longer works as it now requires a subscription.</StyledText>
                </li>
                <li>
                    <a href={"https://sf-mp-4.vercel.app/"} target={"_blank"}><strong>Cat API</strong></a><br/>
                    <StyledText>React App to practice safely including environment variables to our web apps.
                        I used a cat API that returns the number of cat images, however it also requires a subscription
                        to apply this feature. Instead, the free version returns either 1 cat image or 10.</StyledText>
                </li>
                <li>
                    <a href={"https://mp-6-oauth.vercel.app/"} target={"_blank"}><strong>OAuth App</strong></a><br/>
                    <StyledText>Next.js App to practice implementing oauth in our application by redirecting the user to
                        another OAuth provider. In the case of this app, I used Google's OAuth so that only BU emails
                        can login.</StyledText>
                </li>
            </StyledList>
            <br/>
            <StyledTitle>HTML Projects:</StyledTitle>
            <br/>
            <StyledList>
                <li>
                    <a href={"https://cs-people.bu.edu/scfordw/"} target={"_blank"}><strong>Presentation Page</strong></a><br/>
                    <StyledText>An HTML page I designed for my fullstack development class to show my HTML/CSS skills. The
                        page includes some information about myself and my hobby's and can be accessed through BU's Computer
                        Science Department's Directory.
                    </StyledText>
                </li>
                <li>
                    <a href={"https://sofiac1903.github.io/resume_sofia_ford/"} target={"_blank"}><strong>Old Resume</strong></a><br/>
                    <StyledText>My first attempt at creating a website for my resume by using Jen Looper's HTML/CSS workshop.
                        This workshop can be found on Jen Looper's github at the following link:<br/>

                        <Link to={"https://github.com/jlooper/workshop-library/blob/main/full/build-resume-website/4-creating-website.md"} target={"_blank"}>
                            Jen Loopers <em>Creating Your Website</em> Workshop
                        </Link>
                    </StyledText>
                </li>


            </StyledList>
            <br/>
            <Calculator/>
            <br/>
        </StyledMain>
    )
}