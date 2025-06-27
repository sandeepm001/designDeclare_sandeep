import React from 'react'
import './Styles/Main.css';
import Head from '../Components/Head/Head'
import Breakdown from '../Components/Breakdown/Breakdown';
import Donate from '../Components/Donate/Donate';
import Acts from '../Components/Acts/Acts';
import Emergency from '../Components/Emergency/Emergency';
import Latest from '../Components/Latest/Latest';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Signatories from '../Components/Signatories/Signatories';
import GlobalSupport from '../Components/GlobalSupport/GlobalSupport';

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className='main'>
        <Head />
        <Breakdown />
        <Donate />
        <Acts />
        <section id="declare-section">
          <Emergency />
        </section>
        <Latest />
        <NewsLetter />
        <Signatories />
        <GlobalSupport />
      </div>
    </div>
  )
}

export default Main