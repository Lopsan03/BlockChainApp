import {Link} from "react-router-dom";

export const DsBdNavBar = ({setHome, displayHome, setTransactions, displayTransactions, setPay, displayPay, setSavings, displaySaving}) =>{
    return(
        <section className={"dsbd-navbar-section"}>
            <article className={"dsbd-navbar-container"}>
                <div className={"dsbd-main-logo--div"}>
                    <Link className={"dsbd-main-logo-link"} to={"/DashBoard"}>XCOIN</Link>
                </div>
                <div className={"dsbd-data-options--div"}>
                    <button onClick={setHome} className={displayHome ? "dsbr-link-true" : "dsbr-link-false"}>Home</button>
                    <button onClick={setTransactions} className={displayTransactions ? "dsbr-link-true" : "dsbr-link-false"}>Transactions</button>
                    <button onClick={setPay} className={displayPay ? "dsbr-link-true" : "dsbr-link-false"}>Pay</button>
                    <button onClick={setSavings} className={displaySaving ? "dsbr-link-true" : "dsbr-link-false"}>Savings</button>
                </div>
            </article>
        </section>
    )
}