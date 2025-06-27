import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [consentData, setConsentData] = useState(false);
    const [formData, setFormData] = useState({
        email: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleClick = (e) => {
        e.preventDefault(); //prevent page reload
        navigate('/privacy-policy');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
                setSubmitted(true);
                setFormData({
                    email: ""
                });
                setConsentData(false);
            }, 1000)
        }, 1000)

    };

    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div className="footer-left">
                    <p className='footer-left-head1 testAnton'>Design</p>
                    <p className='footer-left-head1 testAnton'>Declares</p>
                </div>
                <div className="footer-right">
                    <div className="footer-right-1">
                        <div className="footer-contacts">
                            <div>
                                <p>Contact</p>
                                <p>Instagram</p>
                            </div>
                            <div>
                                <p>Linkedin</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <form className="newsletter-form-footer" onSubmit={handleSubmit}>
                            <p className='newsletter-p'>Sign up to the D! Newsletter</p>
                            <div className="field3">
                                <label>Email:*</label>
                                <input type="email" name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="consent-button3">
                                <div className="consent-item-div">
                                    <div className="consent-item3">
                                        <span required
                                            onClick={() => setConsentData(!consentData)}
                                            className={`checkbox3 ${consentData ? "selected" : ""}`}
                                        >
                                            <span className='cross'>x</span>
                                        </span>
                                        <span className="consent-text3">
                                            I would like to be added to the Design Declares!
                                            newsletter and receive further updates.
                                        </span>
                                    </div>
                                    <div>
                                        <a className='footer-anchor' href="/privacy-policy" onClick={handleClick}>View our Privacy Policy</a>
                                    </div>
                                </div>
                                <button type='submit' className="submit-btn3">Subscribe</button>
                            </div>

                            <div className="loading3">
                                {showLoader && <div className="loader-ring3"></div>}
                            </div>

                            {submitted && !showLoader && (
                                <p style={{ fontSize: '18px', paddingBottom: '-20px' }}>
                                    Thank you for resubscribing.</p>
                            )}

                        </form>

                    </div>
                    <div className="footer-right-2">
                        <p>This website has been built following low-carbon principles of
                            web development and hosted using serverless computing, by only
                            allocating energy when needed and on demand.
                            <span> Learn more about our carbon footprint.</span>
                        </p>
                        <p>Empowered by. <span> Driftime®</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer