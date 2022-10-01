import {Link} from "react-router-dom";

export const DsBdNavBarTop = ({title}) =>{
    return(
        <section className={"dsbd-navbar-top-section"}>
            <article>
                <div className={"navbar-top-title--div"}>
                    <h2>{title}</h2>
                </div>
                <div className={"navbar-top-options"}>
                    <button><span></span></button>
                    <Link className={"navbar-top-link"} to={"/"}>Log Out</Link>
                </div>
            </article>
        </section>
    )
}