import React, { useState } from 'react'
import './About.css';
import about1 from '../Assets/about1.svg';
import about2 from '../Assets/about2.svg';
import about3 from '../Assets/about3.svg';
import about4 from '../Assets/about4.svg';
import about5 from '../Assets/about5.svg';
import about6 from '../Assets/about6.svg';
import about7 from '../Assets/about7.webp'
import about8 from '../Assets/about8.webp'
import about9 from '../Assets/about9.webp'
import about10 from '../Assets/about10.webp'
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goTo = (path) => {
        if (path === '#declare') {
            if (location.pathname !== '/') navigate('/');
            requestAnimationFrame(() =>
                document.getElementById('declare-section')?.scrollIntoView({ behavior: 'smooth' })
            );
        } else {
            navigate(path);
        }
    };
    return (
        <div className="about-wrapper">
            <div className="about-header testAnton">D!</div>
            <div className="about">
                <div className="about1">
                    <div className="about1-left scroll-fade-up">
                        <p>About Design Declares</p>
                    </div>
                    <div className="about1-right scroll-fade-up">
                        <h1>Climate breakdown has begun. And business as usual is not an option.</h1>
                        <h4>That's why we started Design Declares.</h4>
                        <p>Inspired by a global declaration movement sounding the alarm in industries everywhere,
                            we're an industry-recognised initiative representing the fears, hopes and commitment
                            to action of a growing group of designers, design studios, agencies and institutions.</p>
                        <button  onClick={()=> navigate('/')} className='about-btn'>See Global Declarations</button>
                        <div className="about1-right-div">
                            <div className='about1-right-div1'>
                                <p>Together, we sit at the very beginning of the creative process. The tools we use
                                    and the choices we make can influence society’s behaviour, change economies
                                    and challenge everything that’s come before.
                                </p>
                            </div>

                            <div className='about1-right-div1'>
                                <p>Because design, whether it’s a product, a piece of packaging or an exhibition
                                    space, has impact. It’s up to us whether that impact is harmful or healing.</p>
                                <p>We’re glad you’re here. Let’s get to work.</p>

                            </div>
                        </div>
                        <button  onClick={() => goTo('#declare')} className='about-btn'>Declare Emergency Now</button>
                        <div className="about1-right-list">
                            <ul>
                                <li>Design Declares is free.</li>
                                <li>‘Design’ to us means industrial, digital, graphic, communication and service design.</li>
                                <li>Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.</li>
                                <li>Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.</li>
                            </ul>
                            <ul>
                                <li>We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.
                                </li>
                                <li>As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about2">
                    <div className="about2-left scroll-fade-up">
                        <p>Global Partnerships</p>

                    </div>
                    <div className="about2-right scroll-fade-up">
                        <p>We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*</p>
                        <div className="about2-right-div">
                            <div>
                                <p>The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.</p>
                                <p>It doesn’t matter where on the journey you are. What matters is that you’re here, and you’re ready to do the work. Because there is no design on a dead planet.</p>
                            </div>
                            <div>
                                <p>*We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you’re interested in, please get in touch.</p>
                                <p>Join our list of global partners...</p>
                                <span>UK, Ireland, Brazil, Australia</span>
                            </div>
                        </div>
                        <button  onClick={()=> navigate('/contact')} className='about-btn'>Get in Touch</button>

                    </div>
                </div>
                <div className="about3">
                    <div className="about3-left scroll-fade-up">
                        <p>The Designers Behind Design Declares UK</p>
                    </div>
                    <div className="about3-right scroll-fade-up">
                        <p>Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.</p>

                        <div className="about3-right-div">
                            <span>
                                <img className='img' src={about1} alt="" />
                                <img className='img' src={about2} alt="" />
                                <img className='img' src={about3} alt="" />
                            </span>
                            <span>
                                <img className='img' src={about4} alt="" />
                                <img className='img' src={about5} alt="" />
                                <img className='img-odd' src={about6} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about4">
                    <div className="about4-left scroll-fade-up">
                        <p>Steering Group</p>
                    </div>
                    <div className="about4-right scroll-fade-up">
                        <span>
                            <img src={about7} alt="" />
                            <p>Abb-d Taiyo</p>
                            <em>Driftime®</em>
                        </span>
                        <span>
                            <img src={about8} alt="" />
                            <p>Alexie Sommer

                            </p>
                            <em>URGE Collective</em>
                        </span>
                        <span>
                            <img src={about9} alt="" />
                            <p>Aurelie Lionet</p>
                            <em>Design for Life</em>
                        </span>
                        <span>
                            <img src={about10} alt="" />
                            <p>Jo Barnard</p>
                            <em>Morrama</em>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About