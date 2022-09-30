import {Link} from "react-router-dom";

export const DsBdNavBar = () =>{
    return(
        <section className={"dsbd-navbar-section"}>
            <article className={"dsbd-navbar-container"}>
                <div>
                    <Link to={"/DashBoard"}>XCOIN</Link>
                </div>
                <div>
                    <li>
                        <Link to={"/DashBoard"} className={"dsbr-link"}>Dash Board</Link>
                        <Link to={"/DashBoard"} className={"dsbr-link"}>Dash Board</Link>
                        <Link to={"/DashBoard"} className={"dsbr-link"}>Dash Board</Link>
                        <Link to={"/DashBoard"} className={"dsbr-link"}>Dash Board</Link>
                    </li>
                </div>
            </article>
        </section>
    )
}