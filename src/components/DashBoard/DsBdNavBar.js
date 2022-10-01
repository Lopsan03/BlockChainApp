import {Link} from "react-router-dom";

export const DsBdNavBar = () =>{
    return(
        <section className={"dsbd-navbar-section"}>
            <article className={"dsbd-navbar-container"}>
                <div className={"dsbd-main-logo--div"}>
                    <Link className={"dsbd-main-logo-link"} to={"/DashBoard"}>XCOIN</Link>
                </div>
                <div className={"dsbd-data-options--div"}>
                    <Link to={"/DashBoard"} className={"dsbr-link"}>Home</Link>
                    <Link to={"/DashBoard"} className={"dsbr-link"}>Transactions</Link>
                    <Link to={"/DashBoard"} className={"dsbr-link"}>Pay</Link>
                    <Link to={"/DashBoard"} className={"dsbr-link"}>Savings</Link>
                </div>
            </article>
        </section>
    )
}