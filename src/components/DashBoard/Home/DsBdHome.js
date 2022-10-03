export const DsBdHome = ({display}) =>{
    return(
        <section className={display ? "dsbd-home-section" : "dsbd-home-section--off"}>
            <article className={"dsbd-home-section"}>
                <div className={"home-divisor--top"}>
                    <button>qwd</button>
                    <button>qwd</button>
                    <button>qwd</button>
                </div>
                <div className={"home-divisor--down"}>
                    <section className={"home-divisor--left"}>
                        <div>
                            <span>ID</span>
                            <span>Amount</span>
                            <span>From</span>
                            <span>To</span>
                            <span>Time</span>
                            <span>Date</span>
                        </div>
                    </section>
                    <section className={"home-divisor--right"}>
                        <div>
                            <h3>Balance</h3>
                        </div>
                        <div>
                            <p>6000$</p>
                        </div>
                    </section>
                </div>
            </article>
        </section>
    )
}