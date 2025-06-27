import React from 'react'
import './Acts.css';

const content = [
    {
        id: 1,
        title: "Sound the Alarm",
        desc: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - within our organisations and our practice."
    },
    {
        id: 2,
        title: "Start the Journey",
        desc: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice.The Design Declares Toolkit is a great place to start."

    },
    {
        id: 3,
        title: "Bring Clients with Us",
        desc: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process.Not every design output will be carbon-neutral or fully climate-friendly, but every project is an opportunity to make real progress."
        
    },
    {
        id: 4,
        title: "Measure What We Make",
        desc: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    
    },
    {
        id: 5,
        title: "Redefine ‘Good’",
        desc: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    
    },
    {
        id: 6,
        title: "Educate, Accelerate",
        desc:  "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
        
    },
    {
        id: 7,
        title: "Design for Justice",
        desc:  "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
        
    },
    {
        id: 8,
        title: "Amplify Voices for Change",
        desc: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    }
];


const Acts = () => {

    return (
        <div className="acts">
            <div className="acts-left scroll-fade-up">
                <p>
                    8 Acts of Emergency
                </p>
            </div>
            <div className="acts-right scroll-fade-up">
                <p className="acts-right-intro">
                    What does it take to Declare? It's accepting we are in an emergency of climate and nature,
                    and a commitment to do something about it. Here are eight places to start:
                </p>
                <div className="acts-right-8">
                    {content.map((item, index) => {
                        return(
                        <div key={item.id} className="content-div">
                            <div className="index-title">
                                <div className="index">
                                    <p>{item.id}</p>
                                </div>
                                <div className="title">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className="content-para">
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Acts