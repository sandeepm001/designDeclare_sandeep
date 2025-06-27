import React from 'react'
import './Head.css';
import useStaggerReveal from '../Scrollindicator/userStaggerReveal';

const Head = () => {
    useStaggerReveal();
    return (
        <div className="head">
            <div className="head-left">
                <div className="reveal-line">
                    <span className="head-left1 testAnton">
                        DESIGN
                    </span>
                </div>
                <div className="reveal-line">
                    <span className="head-left2 testAnton">
                        DECLARES
                    </span>
                </div>
                <div className="reveal-line">
                    <span className="head-left3 testAnton">
                        UK
                    </span>
                </div>
            </div>
            <div className="head-right scroll-fade-up ">
                <p>Design Declares is a growing group of designers, design studios, agencies and institutions
                    here to declare a climate and ecological emergency. As part of the global declaration movement,
                    we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.</p>
            </div>
        </div>
    )
}

export default Head