import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
    const navigate = useNavigate();
    const [consentData, setConsentData] = useState(false);
    const [consentNewsletter, setConsentNewsletter] = useState(false);

    const [submitted, setSubmitted] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        teamContact: "",
        enquiry: "Contribute to toolkit",
        message: "",
    })

    const handleClick = (e) => {
        e.preventDefault(); //prevent page reload
        navigate('/privacy-policy');
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false);
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    teamContact: "",
                    enquiry: "Contribute to toolkit",
                    message: "",
                });
                setConsentData(false);
                setConsentNewsletter(false);
            }, 2000)
        }, 1000)

    };

    return (
        <div className="contact-wrapper">
            <div className="contact-head testAnton">
                D!
            </div>
            <div className="contact">
                <div className="contact-left scroll-fade-up">
                    <p>Contact</p>
                </div>
                <div className="contact-right scroll-fade-up">
                    <form className="declare-wrapper" onSubmit={handleSubmit}>
                        <h1>Send Us A Message</h1>
                        <div className="fields">
                            <div className="field">
                                <label>Name:*</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label>Email:*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="field">
                                <label>Team to Contact:*</label>
                                <select
                                    name="teamContact"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>D! UK</option>
                                    <option>D! Ireland</option>
                                    <option>D! Brasil</option>
                                    <option>D! Australia</option>
                                </select>
                            </div>

                            <div className="field">
                                <label>Enquiry type:*</label>
                                <select
                                    name="enquiry"
                                    value={formData.discipline}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Contribute to toolkit</option>
                                    <option>Valunteer my Time</option>
                                    <option>Set up a New Chapter</option>
                                    <option>Discuss somthing else</option>
                                </select>
                            </div>


                            <div className="field textarea">
                                <textarea
                                    placeholder="Please write you'r message here."
                                    rows="12"
                                    name="message"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="consents">
                            <label className="consent-item">
                                <span required
                                    onClick={() => setConsentData(!consentData)}
                                    className={`checkbox ${consentData ? "selected" : ""}`}
                                >
                                    <span className="cross">×</span>
                                </span>
                                <span className="consent-text">
                                    I would like to be added to the Design Declares! newsletter and receive further updates.
                                </span>
                            </label>
                        </div>
                        <div>
                            <a href="/privacy-policy" onClick={handleClick}>View our Privacy Policy</a>
                        </div>
                        <div className="loading">
                            <button type='submit' className="submit-btn">Send Message</button>
                            {showLoader && <div className="loader-ring"></div>}
                        </div>

                        {submitted && !showLoader && (
                            <p style={{ fontSize: '18px', paddingTop: '30px', paddingBottom: '-20px' }}>
                                Thankyou for sending message!</p>
                        )}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact