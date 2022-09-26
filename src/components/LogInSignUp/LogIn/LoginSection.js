import {Link} from "react-router-dom";

export const LoginSection = () =>{
    return(
        <section>
            <article>
                <h2>Login</h2>
                <div>
                    <input placeholder={"User Name / Phone"} type={"text"}/>
                    <input placeholder={"Password"} type={"password"}/>
                </div>
                <div>
                    <Link to={"/"}>Doesn't Account?<br/> Make new one</Link>
                </div>
            </article>
        </section>
    )
}