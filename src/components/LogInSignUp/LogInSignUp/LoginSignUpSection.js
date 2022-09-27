import {Link} from "react-router-dom";
import {useState} from "react";

export const LoginSignUpSection = () =>{
    const [logInDisplay, setLogInDisplay] = useState(true)
    const [signUpDisplay, setSignUpDisplay] = useState(false)

    const displaySignup = () => {
        setLogInDisplay(false)
        setSignUpDisplay(true)
    }

    return(
        <>
            <section className={logInDisplay ? "login-section-true" : "login-section-false"}>
                <article className={"login-container"}>
                    <h2>Login</h2>
                    <div className={"login-container--input"}>
                        <input placeholder={"User Name / Phone"} type={"text"}/>
                        <input placeholder={"Password"} type={"password"}/>
                    </div>
                    <div className={""}>
                        <Link to={"/"}>Confirm</Link>
                    </div>
                    <div className={"login-container--link"}>
                        <button onClick={displaySignup}><p>Doesn't Account?<br/> Make new one</p></button>
                    </div>
                </article>
            </section>
        </>
    )
}