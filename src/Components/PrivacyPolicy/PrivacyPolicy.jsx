import React from 'react'
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-wrapper">
            <p className="privacy-head testAnton">D!</p>
            <div className="privacy">
                <div className="privacy-left">
                    <p>Privacy Policy</p>
                </div>
                <div className="privacy-right">
                    <p>This Privacy Policy is for the benefit of visitors to our website.
                        It will tell you how we look after your personal data as your privacy
                        is important to us. Design Declares protects your privacy with Cabin
                        analytics - this means:
                    </p>
                    <ul>
                        <li>No cookies</li>
                        <li> No data sharing</li>
                        <li>No ad networks</li>
                        <li>Carbon neutral</li>
                        <li>Fast and lightweight</li>
                        <li>Compliant with all privacy laws</li>
                    </ul>
                    <p>Cabin is built on the concept of privacy-by-design.
                        Visitor data is stored in a unique data structure which makes it 100%
                        anonymous and compliant with all privacy laws, globally. To learn more about Cabin,
                        <span onClick={()=>window.open("https://withcabin.com/","_blank")}>click here.</span>
                    </p>
                    <p>Design Declares collect emails and names via Brevo and will use the information
                        you provide via Brevo to be in touch with you.</p>
                    <p>We use the data collected by our website to monitor trends to enable us to monitor
                        how our website is being used, so that we can operate more effectively towards
                        audience needs and expectations. Emails and names gathered via Brevo will be used
                        to send updates and marketing related to Design Declares as a service, product or
                        insight. This includes all subsidiaries and partnering agencies involved in the
                        curation of Design Declares.</p>
                    <p>We will not actively send your data anywhere globally, however Cabin or Brevo may do this.
                        Platforms such as these subscribe to the EU-US Privacy Shield framework which
                        means that it has agreed to work with the appropriate regulatory authorities
                        to resolve any complaints regarding the transfer of personal data, where these
                        complaints cannot be resolved directly. Organisations subscribing to the EU- US
                        Privacy Shield framework are considered to be permitted destinations for personal
                        data by the EU.</p>
                    <p>We will retain your IP address for 90 days after which time it is automatically removed.
                        Emails via Brevo will be kept indefinitely to market products, services and insights
                        related to Design Declares. Personal details can be removed via Brevo by unsubscribing
                        at the bottom of any email send out.</p>
                    <p>If you have any questions or concerns about our use of your personal information,
                        please let us know by sending an email to
                        <span>hello@designdeclares.com.</span></p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy