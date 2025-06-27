import React, { useState } from "react";
import "./DeclarationForm.css";
import { useNavigate } from "react-router-dom";

const types = [
    {
        id: "business",
        label: "As a business",
        nameLabel: "Business Name:*",
        extra: false,
    },
    {
        id: "individual",
        label: "As an individual",
        nameLabel: "Individual Name:*",
        extra: false,
    },
    {
        id: "public",
        label: "As a public institution",
        nameLabel: "Institution Name:*",
        extra: false,
    },
    {
        id: "team",
        label: "As a team or department",
        nameLabel: "Business Name:*",
        extra: true,
    },
];

export default function DeclarationForm() {
    const navigate = useNavigate();
    const [declarer, setDeclarer] = useState("business");
    const [consentData, setConsentData] = useState(false);
    const [consentNewsletter, setConsentNewsletter] = useState(false);

    const [submitted, setSubmitted] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        team: "",
        website: "",
        country: "United Kingdom",
        discipline: "",
        email: "",
        reason: ""
    })

    const currentType = types.find((t) => t.id === declarer);
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
                    team: "",
                    website: "",
                    country: "United Kingdom",
                    discipline: "",
                    email: "",
                    reason: "",
                });
                setConsentData(false);
                setConsentNewsletter(false);
            }, 2000)
        }, 1000)

    };

    return (
        <form className="declare-wrapper" onSubmit={handleSubmit}>
            <h1>I am Declaring Emergency</h1>

            <div className="type-grid">
                {types.map((t) => (
                    <button
                        type="button"
                        key={t.id}
                        onClick={() => setDeclarer(t.id)}
                        className={`type-btn ${declarer === t.id ? "selected" : ""}`}
                    >
                        <span className="checkbox">
                            <span className="cross">×</span>
                        </span>
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="fields">
                <div className="field">
                    <label>{currentType.nameLabel}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {currentType.extra && (
                    <div className="field">
                        <label>Team Name:*</label>
                        <input
                            type="text"
                            name="team"
                            value={formData.team}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="field">
                    <label>Website:*</label>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="field">
                    <label>Country:*</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    >
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>India</option>
                    </select>
                </div>

                <div className="field">
                    <label>Discipline:*</label>
                    <select
                        name="discipline"
                        value={formData.discipline}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select…</option>
                        <option>Graphic Design</option>
                        <option>UX/UI</option>
                        <option>Industrial Design</option>
                    </select>
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
                <div className="field textarea">
                    <textarea
                        placeholder="Why are you Declaring? In sentence one or Two,tell us why you're joining Desing Declares"
                        rows="12"
                        name="reason"
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
                        I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
                    </span>
                </label>

                <label className="consent-item">
                    <span required
                        onClick={() => setConsentNewsletter(!consentNewsletter)}
                        className={`checkbox ${consentNewsletter ? "selected" : ""}`}
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
                <button type='submit' className="submit-btn">Declare Emergency Now</button>
                {showLoader && <div className="loader-ring"></div>}
            </div>

            {submitted && !showLoader && (
                <p style={{ fontSize: '18px', paddingTop: '30px', paddingBottom: '-20px' }}>
                    Thankyou for declaring emergency!</p>
            )}

        </form>
    );
}