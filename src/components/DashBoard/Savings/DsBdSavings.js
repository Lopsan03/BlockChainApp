export const DsBdSavings = ({display}) =>{
    return(
        <section className={display ? "dsbd-saving-section" : "dsbd-saving-section--off"}>
            <article className={"dsbd-saving-section"}>
                <div className={"saving-divisor--top"}>
                    <button>qwd</button>
                    <button>qwd</button>
                    <button>qwd</button>
                </div>
                <div className={"saving-divisor--down"}>
                    <section className={"saving-divisor--left"}>
                        <div>
                            <span>Name</span>
                            <span>Comment</span>
                            <span>Total</span>
                            <span>Plus</span>
                        </div>
                    </section>
                    <section className={"saving-divisor--right"}>
                        <div>
                            <h3>Transfer</h3>
                        </div>
                        <div>
                            <input type={"text"} placeholder={"Amount"}/>
                            <input type={"text"} placeholder={"Chose Savings"}/>
                        </div>
                        <div>
                            <button onClick={() => alert("Transaction Done")}>Confirm</button>
                        </div>
                    </section>
                </div>
            </article>
        </section>
    )
}