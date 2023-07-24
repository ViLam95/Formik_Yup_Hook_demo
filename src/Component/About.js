import {Link} from "react-router-dom";

function About() {
    return(
        <>
        <h1>About Page</h1>
            <Link to={'/contact'}>Test</Link>
        </>
    )
}

export default About;