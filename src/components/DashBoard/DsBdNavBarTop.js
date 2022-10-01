import {Link} from "react-router-dom";

export const DsBdNavBarTop = ({title, setHome}) =>{
    return(
        <section>
            <article>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <button onClick={setHome}><span>wqewqeqw</span></button>
                    <Link to={"/"}></Link>
                </div>
            </article>
        </section>
    )
}