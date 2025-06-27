import React, { useState } from 'react'
import './NewsLetter.css';
import news_image from '../Assets/News-toolkit.webp';
import { useNavigate } from 'react-router-dom';

const NewsLetter = () => {
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
                   email:""
                });
                setConsentData(false);
            }, 1000)
        }, 1000)

    };


    return (
        <div className="newsletter">
            <div className="nl-left scroll-fade-up">
                <p>The Design Declares Newsletter and Toolkit</p>
            </div>
            <div className="nl-right scroll-fade-up">
                <img src={news_image} alt="" />
                <p>Subscribe to the Design Declares UK newsletter to receive the
                    latest news and updates. By signing up you will also gain access
                    to The Design Declares Toolkit, a live and evolving Notion site
                    co-created with our community. It is filled with the latest resources
                    and methods to help you on your journey to climate-positive design.
                </p>
                <span>
                    Every signatory to Design Declares will receive an access link to the Toolkit.
                    If you are unable to declare emergency quite yet, you can still access the
                    Toolkit - just register below.
                </span>
                <form className="newsletter-form scroll-fade-up" onSubmit={handleSubmit}>
                    <div className="field2">
                        <label>Email:*</label>
                        <input type="email" name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="consent-item2">
                        <span required
                            onClick={() => setConsentData(!consentData)}
                            className={`checkbox2 ${consentData ? "selected" : ""}`}
                        >
                            <span className='cross'>x</span>
                        </span>
                        <span className="consent-text2">
                            I would like to be added to the Design Declares!
                            newsletter and receive further updates.
                        </span>
                    </div>
                    <div>
                        <a href="/privacy-policy" onClick={handleClick}>View our Privacy Policy</a>
                    </div>
                    <div className="loading">
                        <button type='submit' className="submit-btn">Subscribe</button>
                        {showLoader && <div className="loader-ring"></div>}
                    </div>

                    {submitted && !showLoader && (
                        <p style={{ fontSize: '18px', paddingBottom: '-20px' }}>
                            Thank you for resubscribing.</p>
                    )}

                </form>
            </div>
        </div>
    )
}

export default NewsLetter