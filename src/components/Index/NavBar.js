import {Link} from "react-router-dom";
import {useState} from "react";

export const NavBar = ({ids}) =>{
    const [home, setHome] = useState(true)
    const [aboutUs, setAboutUs] = useState(false)
    const [whyXcoin, setWhyXcoin] = useState(false)

    const activateHome = () =>{
        setHome(true)
        setAboutUs(false)
        setWhyXcoin(false)
    }

    const activateAboutUs = () =>{
        setHome(false)
        setAboutUs(true)
        setWhyXcoin(false)
    }

    const activateWhyXcoin = () =>{
        setHome(false)
        setAboutUs(false)
        setWhyXcoin(true)
    }


    return(
        <section className={"navbar-section"}>
            <article className={"navbar-content"}>
                <div className={"navbar-container--icon"}>
                    <span className={"navbar-icon"}>XCOIN</span>
                </div>
                <div className={"navbar-container--button"}>
                    <button onClick={activateHome} className={home ? "navbar-button-true" : "navbar-button-false"}>
                        Home
                    </button>
                    <button onClick={activateAboutUs} className={aboutUs ? "navbar-button-true" : "navbar-button-false"}>
                        About Us
                    </button>
                    <button onClick={activateWhyXcoin} className={whyXcoin ? "navbar-button-true" : "navbar-button-false"}>
                        Why XCOIN
                    </button>
                </div>
                <div className={"navbar-container--link"}>
                    <Link className={"navbar-link"} to={"/LoginSignUp"}>Gat Started<span></span></Link>
                </div>
            </article>
        </section>
    )
}

