import React from 'react'
import './Donate.css';

const Donate = () => {
    return (
        <div className="donate-wrapper">
            <div className="donate">
                <div className="donate-left scroll-fade-up">
                    <p>Donate to D!</p>
                </div>
                <div className="donate-right scroll-fade-up">
                    <p>Design Declares is a CIC and would not exist without our dedicated team of co-steers,
                        volunteers, and our passionate community working towards change in the creative industry.
                        Your support can go a long way, and helps us too continue the valuable work needed in
                        tackling the climate crises. If you believe in the work we do, please consider a small
                        donation to help us on our journey for a more equitable and just planet.
                    </p>
                    <div className="donate-buttons">
                        <button onClick={()=> window.open("https://wise.com/pay/r/uZ5h3pxRMmTE_pk","_blank")} >Donate $10</button>
                        <button onClick={()=> window.open("https://wise.com/pay/r/uZ5h3pxRMmTE_pk","_blank")} >Donate $20</button>
                        <button onClick={()=> window.open("https://wise.com/pay/r/uZ5h3pxRMmTE_pk","_blank")} >Donate $50</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate