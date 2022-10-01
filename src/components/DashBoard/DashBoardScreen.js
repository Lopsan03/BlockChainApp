import {DsBdNavBar} from "./DsBdNavBar";
import {DsBdNavBarTop} from "./DsBdNavBarTop";
import {useState} from "react";

export const DashBoardScreen = () =>{
    const [title, setTile] = useState("Home")

    const namedTitleHome = () => {
      setTile("Home")
    }

    const namedTitleTransactions = () => {
      setTile("Transactions")
    }

    const namedTitlePay = () => {
      setTile("Pay")
    }

    const namedTitleSavings = () => {
      setTile("Savings")
    }

    return(
        <>
            <section className={"dash-board-structure--flex"}>
                <article className={"navbar-left--container"}>
                    <DsBdNavBar/>
                </article>
                <article className={"content-right--container"}>
                    <DsBdNavBarTop title={title} setHome={namedTitleHome}/>
                </article>
            </section>
        </>
    )
}