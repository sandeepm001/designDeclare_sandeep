import React from 'react'
import './Emergency.css';
import DeclarationForm from './DeclarationForm';

const Emergency = () => {
    return (
        <div className="emergency">
            <div className="em-left scroll-fade-up">
                <p>Declare Emergency Now</p>
            </div>
            <div className="em-right scroll-fade-up">
                <div className="em-right-intro">
                    <p>
                        Design Declares is open to individuals and institutions working in industrial,
                        digital, graphic, communication and service design. To declare here, you must
                        be a company with an office in the UK employing at least one full-time designer.
                        We also welcome declarations from practising freelance designers who are registered
                        as self-employed in the UK, and global supporters from other countries. All declarations
                        will be named and published on this site.
                    </p>
                    <div className="form-div">
                        <DeclarationForm />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Emergency