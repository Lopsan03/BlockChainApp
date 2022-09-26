export const IndexWhyXcoin = () =>{
    return(
        <section className={"why-xcoin-section"}>
            <article className={"why-xcoin-container"}>
                <div className={"why-xcoin-container--title"}>
                    <h2>Our Services</h2>
                </div>
                <div className={"why-xcoin-container-information"}>
                    <section className={"why-xcoin--information-section"}>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Balance</h3>
                            <span className={"money-icon"}></span>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Savings</h3>
                            <span className={"pig-icon"}></span>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Pay</h3>
                            <span className={"pay-icon"}></span>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Transactions</h3>
                            <span className={"change-icon"}></span>
                        </div>
                    </section>
                    <section className={"left-image-xcoin"}></section>
                </div>
            </article>
        </section>
    )
}