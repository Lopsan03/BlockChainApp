import {Link} from "react-router-dom";
import {useState} from "react";

export const LoginSignUpSection = () =>{
    const [logInDisplay, setLogInDisplay] = useState(true)
    const [signUpDisplay, setSignUpDisplay] = useState(false)
    const [verificationDisplay, setVerificationDisplay] = useState(false)


    const displayLogin = () => {
        setLogInDisplay(true)
        setSignUpDisplay(false)
        setVerificationDisplay(false)
    }

    const displaySignup = () => {
        setSignUpDisplay(true)
        setLogInDisplay(false)
        setVerificationDisplay(false)
    }

    const displayVerification = () => {
        setVerificationDisplay(true)
        setSignUpDisplay(false)
        setLogInDisplay(false)
    }

    return(
        <>
            {/*Login Section*/}
            <section className={logInDisplay ? "login-section-true" : "login-section-false"}>
                <article className={"login-container"}>
                    <h2>Login</h2>
                    <div className={"login-container--input"}>
                        <input placeholder={"User Name / Phone"} type={"text"}/>
                        <input placeholder={"Password"} type={"password"}/>
                    </div>
                    <div className={"login-container--link"}>
                        <Link className={"login-link"} to={"/"}>Confirm</Link>
                    </div>
                    <div className={"login-container--button"}>
                        <button onClick={displaySignup}><p>Doesn't Account?<br/> Make a new one</p></button>
                    </div>
                </article>
            </section>

            {/*Signup Section*/}
            <section className={signUpDisplay ? "signup-section-true" : "signup-section-false"}>
                <article className={"signup-container"}>
                    <h2>Sign Up</h2>
                    <div className={"signup-container--input"}>
                        <input placeholder={"User Name"} type={"text"}/>
                        <input placeholder={"Phone"} type={"tel"}/>
                        <input placeholder={"Password"} type={"password"}/>
                        <input placeholder={"Confirm Password"} type={"password"}/>
                    </div>
                    <div className={"signup-container--link"}>
                        <button onClick={displayVerification} className={"signup-button"}>Confirm</button>
                    </div>
                    <div className={"signup-container--button"}>
                        <button onClick={displayLogin}><p>Do you have an account?<br/>Get in!</p></button>
                    </div>
                </article>
            </section>

            {/*Verification Section*/}
            <section className={verificationDisplay ? "verf-section-true" : "verf-section-false"}>
                <article className={"verf-container"}>
                    <h2>Verification</h2>
                    <div className={"verf-container--input"}>
                        <input placeholder={"SMS Code"} type={"text"}/>
                    </div>
                    <div className={"verf-container--link"}>
                        <button className={"verf-button"}>Confirm</button>
                    </div>
                    <div className={"verf-container--button"}>
                        <button onClick={displayLogin}><p>Do you have an account?<br/>Get in!</p></button>
                    </div>
                </article>
            </section>
        </>
    )
}