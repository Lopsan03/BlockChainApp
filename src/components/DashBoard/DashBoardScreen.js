import {DsBdNavBar} from "./DsBdNavBar";

export const DashBoardScreen = () =>{
    return(
        <>
            <section className={"dash-board-structure--flex"}>
                <article className={"navbar-left--container"}>
                    <DsBdNavBar/>
                </article>
                <article className={"content-right--container"}>

                </article>
            </section>
        </>
    )
}