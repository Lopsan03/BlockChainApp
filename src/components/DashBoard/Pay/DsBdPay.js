export const DsBdPay = ({display}) =>{
    return(
        <section className={display ? "dsbd-pay-section" : "dsbd-pay-section--off"}>
            <article className={"dsbd-pay-container"}>
                <div className={"top-table--div"}>
                    <h4>Pay</h4>
                </div>
                <div className={"middle-table--div"}></div>
                <div className={"bottom-table--div"}>
                    <button onClick={() => alert("Cachiporra disporra")}>Confirm</button>
                </div>
            </article>
        </section>
    )
}