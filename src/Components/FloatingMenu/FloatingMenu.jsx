import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FloatingMenu.css';
import plus_icon from '../Assets/plus_1.png';
import close_icon from '../Assets/close.png';
import email_icon from '../Assets/email.png';
import about_icon from '../Assets/information-point.png';
import globe_icon from '../Assets/internet.png';
import home_icon from '../Assets/home.png';
import news_icon from '../Assets/newspaper.png';

export default function FloatingMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const goTo = (path) => {
        if (path === '#declare') {
            if (location.pathname !== '/') navigate('/');
            requestAnimationFrame(() =>
                document.getElementById('declare-section')?.scrollIntoView({ behavior: 'smooth' })
            );
        } else {
            navigate(path);
        }
        setOpen(false);
    };

    return (
        <>
            {/* backdrop */}
            <div
                className={`menu-backdrop ${open ? 'show' : ''}`}
                onClick={() => setOpen(false)}
            />

            {/* root */}
            <div className={`menu-root ${open ? 'open' : ''}`}>

                {/* header */}
                <div className="row header" onClick={() => setOpen(v => !v)}>
                    <span>Menu</span>
                    <img
                        src={open ? close_icon : plus_icon}
                        alt="toggle"
                        className="icon-btn"
                    />
                </div>

                {/* list */}
                <ul className={`link-list ${open ? 'show' : ''}`}>
                    <li onClick={() => goTo('/')}><img src={home_icon} alt="" className="menu-icon" />Home</li>
                    <li onClick={() => goTo('/about')}><img src={about_icon} alt="" className="menu-icon" />About</li>
                    <li onClick={() => goTo('/latest')}><img src={news_icon} alt="" className="menu-icon" />Latest</li>
                    <li onClick={() => goTo('/contact')}><img src={email_icon} alt="" className="menu-icon" />Contact</li>
                    <li onClick={() => goTo('/global-chapter')}>
                        <img src={globe_icon} alt="" className="menu-icon" />Choose Global Chapter
                    </li>
                </ul>

                {/* bottom row */}
                <button className="declare-btn" onClick={() => goTo('#declare')}>
                    <span>Declare Now</span>
                </button>
            </div>
        </>
    );
}
