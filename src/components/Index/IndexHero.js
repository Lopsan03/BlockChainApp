import {Link} from "react-router-dom";

export const IndexHero = () =>{
    return(
        <section className={"hero-section"}>
            <article className={"hero-container"}>
                <div className={"hero-container--title"}>
                    <h1>Modern BlockChain<br/>Bank<br/>Faster and Safer!</h1>
                </div>
                <div className={"hero-container--p"}>
                    <p>Welcome to the new world of transaccions<br/>
                        where you money is not only safe but<br/>
                        protected within every transaccion.<br/>
                        Our priority is your proteccion</p>
                </div>
                <div className={"hero-container--link"}>
                    <Link className={"hero-link"} to={"/LoginSignUp"}>Get Started <span></span></Link>
                </div>
            </article>
        </section>
    )
}