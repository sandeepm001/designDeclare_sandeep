import React, { useState } from 'react';
import './LatestStories.css'; // Create a matching CSS file for styling
import storiesData from '../Assets/LatestStories_data';


const allCategories = ['All', 'Events', 'Case Studies', 'Updates', 'Perspective'];
const allChapters = ['All', 'D! UK', 'D! Ireland', 'D! Australia'];

const LatestStories = () => {
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [chapterFilter, setChapterFilter] = useState('All');

    const filteredData = storiesData.filter(item => {
        const categoryMatch = categoryFilter === 'All' || item.category === categoryFilter;
        const chapterMatch = chapterFilter === 'All' || item.chapter === chapterFilter;
        return categoryMatch && chapterMatch;
    });

    return (
        <div className="stories-wrapper">
            <p className="stories-wrapper-p testAnton " >D!</p>
            <div className="stories-container">
                <div className="sidebar">
                    <div className="filter-section scroll-fade-up">
                        <h2>Categories</h2>
                        <div className="filter-buttons scroll-fade-up">
                            {allCategories.map(cat => (
                                <button
                                    key={cat}
                                    className={categoryFilter === cat ? 'active' : ''}
                                    onClick={() => setCategoryFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="filter-section">
                        <h2>View by Chapter</h2>
                        <div className="filter-buttons">
                            {allChapters.map(chap => (
                                <button
                                    key={chap}
                                    className={chapterFilter === chap ? 'active' : ''}
                                    onClick={() => setChapterFilter(chap)}
                                >
                                    {chap}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="content-area scroll-fade-up">
                    {filteredData.map(item => (
                        <div key={item.id} className="story-card scroll-fade-up">
                            <img src={item.image} alt={item.title} className="story-img" />
                            <div className="story-info">
                                <div className="story-tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                    <span className="date">{item.date}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default LatestStories;
