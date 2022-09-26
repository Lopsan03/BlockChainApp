import {Link} from "react-router-dom";

export const IconSelectionHeader = () =>{
    return(
        <section className={"ls-navbar-section"}>
            <article className={"ls-navbar-container"}>
                <Link className={"ls-navbar-link"} to={"/"}><span></span></Link>
            </article>
        </section>
    )
}