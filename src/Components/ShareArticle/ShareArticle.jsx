import React from 'react'
import "./ShareArticle.css";
import share1 from '../Assets/share1.webp'
import share2 from '../Assets/share2.webp'
import share3 from '../Assets/share3.webp'
import share4 from '../Assets/share4.webp'
import share5 from '../Assets/share5.webp'

const ShareArticle = () => {
    return (
        <div className="share-wrapper">
            <div className="share-head testAnton">D!</div>
            <div className="share-container">
                <div className="share-content">
                    <h2>SD4P Collective: How can Service Design drive meaningful sustainability impact</h2>
                    <div className="share-tag-button">
                        <div className="share-tags">
                            <span>Events</span>
                            <span>D! UK</span>
                            <h6>24.04.2025, 03 PM:30</h6>
                        </div>
                        <button id="disapper-btn" className="submit-btn">Share Article</button>
                    </div>
                    <img src={share1} alt="" />
                    <h1>Recap: SD4P Collective working session - 28th March 2025</h1>
                    <p>In short:</p>
                    <ul>
                        <li>The Service Designer for the Planet Collective (SD4P Collective)
                            is an initiative facilitated by Design Declares</li>
                        <li>The SD4P held its first in-person session on 28 March 2025 at Imperial College London,
                            gathering 30+ professionals and students.</li>
                        <li>We ran breakout groups to develop briefs around:
                            <ul style={{marginLeft:"-20px"}}>
                                <li>Service Design-specific educational material/training</li>
                                <li>Service Design-specific green skill assessment</li>
                                <li>Approaches to measure services sustainability impact</li>
                            </ul>
                        </li>
                        <li>We also reflected on how we run and organise ourselves as a collective,
                            balancing learning and hands-on participation</li>
                        <li>The event was low-waste by design</li>
                        <li>Next SD4P meet-up: online Friday 2nd May 2025, 3pm BST.</li>
                    </ul>
                    <img src={share2} alt="" />
                    <h1>Service Designers for The Planet Collective</h1>
                    <p>Last month marked a significant Service Designers for The Planet Collective (in short the ‘SD4P Collective’):
                        our first in-person session! Held at Imperial College London, this third gathering brought together
                        over 30 participants—students, professionals, thinkers, and doers—united by a common belief:
                        design has a role to play in shaping a more sustainable, just, and regenerative future. 🌍</p>
                    <p>The SD4P Collective is a group of like-minded service designers from the Design Declares community,
                        building a community of practice to advance knowledge, design for life, and create real impact.
                        We launched last October 2024, and the collective includes 70 people to date! At our core:
                        action, experimentation, learning, collaborating, respect and inclusion.</p>
                    <p>The session was very hands-on and focused on ideas the collective had prioritised in previous sessions:</p>
                    <p>✨ Creating educational materials for Service Design, User Research, and Strategic Design</p>
                    <p>✨ Mapping ‘green’ skills and identifying gaps</p>
                    <p>✨ Equipping designers with better measurement tools</p>
                    <p>It began with a wide-angle lens. Ned Gartside took us through the broader ecosystem -
                        mapping ongoing initiatives across public and private
                        design sectors, business, digital sustainability. This was
                        not just about identifying gaps, but about locating where our collective energy can
                        bring the most value. We asked:</p>
                    <p>Where does SD4P sit in this landscape? What can we offer that doesn’t yet exist—or needs strengthening?</p>

                   
                    <img src={share3} alt="" />
                    <p>From there, we moved to action. Splitting into three groups, we unpacked early-stage ideas, evolving them into tangible briefs. With such big groups, we used a ‘liberating structure’ approach to ensure all team members could voice their opinion. Walking through a project canvas brief, the groups uncovered current challenges and needs, ideated on possible ways the ideas could manifest, and discussed who should be involved, both human and non-human stakeholders.</p>

                    <p><strong>In group 1, facilitated by Sruti Gidugu:</strong> On creating educational materials, there was a bigger question of defining ‘design’ and ‘service design’ and based on the context of where members work: how to empower designers to spread the message of sustainability – as pioneers in their work environment, ultimately driving value, to their immediate sphere of influence, and beyond.</p>

                    <p><strong>In group 2, guided by Eve McCann:</strong> Focused on ‘greener skills’ assessment, we discussed how to assess our own green skills – from a knowledge, skills, experience, culture, sustainability areas, etc. standpoint. And how to identify the key gaps that would inform the training material of group 1.</p>

                    <p><strong>In group 3, supported by Sandrine Herbert-Razafinjato:</strong> Focused on ways to measure what we make, the group discussed how to “make the invisible visible”, so to embed sustainability into design decisions – looking beyond a product/service, across the entire lifecycle and supply chain (and with the key question of how to set the ‘right’ parameters?). Interestingly the conversation drifted beyond the ‘designer circle’ and a key idea emerged to bring onboard environmental measurement specialists (not just use self-serve tools or canvases) to support the design work; and to look at Nature as a key stakeholder on the decision making.</p>
                    <img src={share4} alt="" />
                    <p>As the afternoon unfolded, the conversation shifted inwards. We reflected on what it means to be a collective – how we want to organise ourselves, how we share work, get to know each other, and maintain momentum whilst being realistic of everyone’s diverging goals and level of dedication. We discussed how we might cater for 2 types of crowd, maybe 2 streams: the ‘learning-consuming members’ who want to be kept in the loop and have access to what is produced (can be self-served, remote); and the ‘outcome-oriented members’ who actively want to be involved (hands-on, have time/energy to help, want to contribute, maybe more in-person). There is definitely a will to be experimental and empirical: to name, test, learn and iterate as-we-go. And an appetite to hold meetings in nature and a Supper Club 😜.</p>

                    <p>And then, like any productive workshop, we took it to the pub, where we extended the conversations, sparked new connections, came up with more ideas, and it reminded us that the creating change is as much about relationships as it is about ideas.</p>

                    <p>We left feeling energised – not just by the work, the conversations, but by each other.</p>

                    <p>Last but not least, the workshop was designed with care: minimising waste wherever we could. Walking the talk, and embodying the change we want to see becoming the norm. That is: We limited the use of stickies by using whiteboard sheets for brainstorming and ideation (not easy but we're learning! and kudos to the group who DIDN'T use any post-it at all!); The final synthesised boards were captured directly onto Miro. To that extent, we also limited the digital assets to a mere 7 slides on Miro! Imperial Business Design Studio made sure all coffee/teas/water were served in crockery; and they gifted a Chilly's reusable water bottle to all participants. And finally, we used seedpaper for participants badges, so they can go home and rewild their local area by planting them afterwards 🌸 🙏 🫶</p>

                    <p>The SD4P Collective is just getting started, and it’s promising! We are looking forward to keeping the conversation going.</p>

                    <p>The next meet-up will be online on Friday 2nd May 2025 at 3pm UK. To join, please DM Ned.</p>

                    <p>Thank you to Imperial College Business Design Studio for supporting this initiative.</p>
                    <img src={share5} alt="" />

                    <hr />
                    <button className = "submit-btn">Share Article</button>
                </div>
            </div>
        </div>
    )
}

export default ShareArticle