import {DsBdNavBar} from "./DsBdNavBar";
import {DsBdNavBarTop} from "./DsBdNavBarTop";
import {useState} from "react";
import {DsBdHome} from "./Home/DsBdHome";
import {DsBdTransactions} from "./Transactions/DsBdTransactions";

export const DashBoardScreen = () =>{
    const [title, setTile] = useState("Home")
    const [displayHome, setDisplayHome] = useState(true)
    const [displayTransactions, setDisplayTransactions] = useState(false)
    const [displayPay, setDisplayPay] = useState(false)
    const [displaySavings, setDisplaySavings] = useState(false)


    const namedTitleHome = () => {
        setTile("Home")

        setDisplayHome(true)
        setDisplayTransactions(false)
        setDisplayPay(false)
        setDisplaySavings(false)
    }

    const namedTitleTransactions = () => {
        setTile("Transactions")

        setDisplayHome(false)
        setDisplayTransactions(true)
        setDisplayPay(false)
        setDisplaySavings(false)
    }

    const namedTitlePay = () => {
        setTile("Pay")

        setDisplayHome(false)
        setDisplayTransactions(false)
        setDisplayPay(true)
        setDisplaySavings(false)
    }

    const namedTitleSavings = () => {
        setTile("Savings")

        setDisplayHome(false)
        setDisplayTransactions(false)
        setDisplayPay(false)
        setDisplaySavings(true)
    }

    return(
        <>
            <section className={"dash-board-structure--flex"}>
                <article className={"navbar-left--container"}>
                    <DsBdNavBar setHome={namedTitleHome}
                                setTransactions={namedTitleTransactions}
                                setPay={namedTitlePay}
                                setSavings={namedTitleSavings}
                                displayHome={displayHome}
                                displayTransactions={displayTransactions}
                                displayPay={displayPay}
                                displaySaving={displaySavings}
                    />
                </article>
                <article className={"content-right--container"}>
                    <DsBdNavBarTop title={title}/>
                    <DsBdHome display={displayHome}/>
                    <DsBdTransactions display={displayTransactions}/>
                </article>
            </section>
        </>
    )
}