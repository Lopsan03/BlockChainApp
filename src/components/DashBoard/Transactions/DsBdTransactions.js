export const DsBdTransactions = ({display}) =>{
    return(
        <section className={display ? "dsbd-transactions-section" : "dsbd-transactions-section--off"}>
            <article className={"dsbd-transactions-container"}>
                <div className={"top-table--div"}>
                    <p>Time Frame: <span></span></p>
                    <p>Start Date: <span></span></p>
                    <p>End Date:<span></span></p>
                </div>
                <div className={"top-down-table--div"}>
                    <span>ID</span>
                    <span>Amount</span>
                    <span>From</span>
                    <span>To</span>
                    <span>Time</span>
                    <span>Date</span>
                </div>
            </article>
        </section>
    )
}