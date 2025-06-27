import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Footer from './Components/Footer/Footer';
import LatestStories from './Components/LatestStories/LatestStories';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import ShareArticle from './Components/ShareArticle/ShareArticle';
import FloatingMenu from './Components/FloatingMenu/FloatingMenu';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Global from './Components/Global/Global';
import Scrollindicator from './Components/Scrollindicator/Scrollindicator';


function App() {
  const location = useLocation();
  useEffect(() => {
    // 1️⃣ Give the browser one paint before attaching the observer
    const id = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              // animate once
            }
          });
        },
        {
          threshold: 0,          // 2️⃣ any pixel counts
          rootMargin: '0px 0px -10% 0px' // fire a bit earlier (optional)
        }
      );

      // 3️⃣ attach to every .scroll-fade-up on the page
      document
        .querySelectorAll('.scroll-fade-up')
        .forEach(el => observer.observe(el));


    });

    // cancel RAF if the component unmounts before it runs
    return () => cancelAnimationFrame(id);
  }, [location]);

  return (
    <div className="app-container">
      <Scrollindicator />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/latest" element={<LatestStories />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path="/latest/share-articles" element={<ShareArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global-chapter" element={<Global />} />
        </Routes>
      </div>
      <FloatingMenu />
      <div className="footer">
        <Footer />
      </div>
    </div>

  );
}

export default App;
