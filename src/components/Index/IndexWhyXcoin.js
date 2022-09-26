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
                            <div className={"bounced-icon"}></div>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Savings</h3>
                            <div className={"pig-icon"}></div>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Pay</h3>
                            <div className={"pay-icon"}></div>
                        </div>
                        <div className={"why-xcoin--information--divisor"}>
                            <h3>Transactions</h3>
                            <div className={"change-icon"}></div>
                        </div>
                    </section>
                    <section className={"left-image-xcoin"}></section>
                </div>
            </article>
        </section>
    )
}