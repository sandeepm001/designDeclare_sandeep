import React, { useState } from 'react'
import './Breakdown.css';
import down_icon from '../Assets/down-arrow.png';

const Content = [
  {
    title: "The Role of Desing",
    desc: [
      "As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.",
      "Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it."

    ]
  },
  {
    title: "Time for Change",
    desc: [
      "Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.",
      "This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.",
      "It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.",
      "And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice."
    ]
  },
  {
    title: "Act with Urgency",
    desc: [
      "We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.",
      "This is the most important brief of our lives. Join us as we begin to design a climate-positive future."
    ]
  }

]

const Breakdown = () => {
  const [openSections, setOpenSections] = useState([]);
  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };



  return (
    <div className="breakdown">
      <div className="b-left scroll-fade-up">
        <p>This is Breakdown</p>

      </div>
      <div className="b-right scroll-fade-up">
        <p className='intro'>The science is settled.
          We are in an emergency of climate and nature.
          The world is past breaking point; the breakdown has begun...
        </p>
        {Content.map((cont, i) => (
          <div key={i} className="b-right-roll-main">
             <hr />
            <button className='b-right-roll'
              onClick={() => toggleSection(i)}
            >
              <span>{cont.title}</span>
              <img src={down_icon}
                className={openSections.includes(i) ? "arrow rotated" : "arrow"}
                alt=""
              />
            </button>
            <div className={openSections.includes(i) ? "content open" : "content"} >
              {cont.desc.map((p, j) => (
                <p key={j}>{p}</p>
              ))}

            </div>
          </div>
        ))}
        <button onClick={()=> window.open("https://www.youtube.com/watch?v=XpnOe94eXdM","_blank")} className='view-btn'>
          View our D! Intro Video
        </button>

      </div>
    </div>
  )
}

export default Breakdown