import React from 'react'
import './Latest.css';
import { useNavigate } from 'react-router-dom';

const Latest = () => {

    const navigate = useNavigate();

    return (
        <div className="latest">
            <div className="latest-left scroll-fade-up">
                <p>Latest</p>
            </div>
            <div className="latest-right">
                <div className="latest-right-top-1 scroll-fade-up">
                    <div className="latest-right-top-11">
                        <span>Events</span>
                        <span>D! UK</span>
                        <p>24.04.2025, 03 PM:30</p>
                    </div>
                    <div className="latest-right-top-12">
                        <div className="latest-right-top-12-left">
                            <p>SD4P Collective: How can Service Design drive meaningful sustainability impact</p>
                        </div>
                        <div className="latest-right-top-12-right">
                            <p>Recap: SD4P Collective working session - 28th March 2025</p>
                            <span onClick= {()=> navigate('/latest/share-articles')}>Read Story</span>
                        </div>
                    </div>
                </div>
                <div className="latest-right-top-1 scroll-fade-up">
                    <div className="latest-right-top-11">
                        <span>Events</span>
                        <span>D! UK</span>
                        <p>06.12.2024, 02 PM:30</p>
                    </div>
                    <div className="latest-right-top-12">
                        <div className="latest-right-top-12-left">
                            <p>Designing Tomorrow: Speculative Thinking Shapes Our Present</p>
                        </div>
                        <div className="latest-right-top-12-right">
                            <p>Design Declares' November Event Challenges Perspectives on Sustainability and Innovation</p>
                            <span onClick= {()=> navigate('/latest/share-articles')}>Read Story</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/latest')}
                    className='latest-btn scroll-fade-up'>
                    See all the latest
                </button>
            </div>
        </div>
    )
}

export default Latest