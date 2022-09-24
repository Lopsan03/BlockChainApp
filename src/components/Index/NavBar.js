import {Link} from "react-router-dom";

export const NavBar = () =>{
    return(
        <section className={"navbar-section"}>
            <article className={"navbar-content"}>
                <div className={"navbar-container--icon"}>
                    <span className={"navbar-icon"}>XCOIN</span>
                </div>
                <div className={"navbar-container--button"}>
                    <button className={"navbar-button"}>Home</button>
                    <button className={"navbar-button"}>About Us</button>
                    <button className={"navbar-button"}>Why XCOIN</button>
                </div>
                <div className={"navbar-container--link"}>
                    <Link className={"navbar-link"} to={"/"}>Gat Started<span></span></Link>
                </div>
            </article>
        </section>
    )
}

