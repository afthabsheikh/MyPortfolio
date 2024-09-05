import React, {useEffect, useState, useMemo } from 'react';
import './App.css';
import Navbar from './components/navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Alert from './components/Alert';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({ 
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1800)
  }

  const names = useMemo(()=>[ "FullStackAfthab", "AfthabCodes", "TechieAfthab", "DevAfthab"],[]);
  const[currentName, setCurrentName] = useState('')
  // const AboutNameRef = useRef(null);
  // const FooterNameRef = useRef(null);
  useEffect(() => {
    let nameIndex = 0;
    let charIndex = 0;
    let currentName = '';
    let isDeleting = false;
    function typeEffect() {
      const typingSpeed = 200;
      const deletingSpeed = 100;
      const pauseBetweenNames = 1500;

      if (!isDeleting && charIndex <= names[nameIndex].length) {
        currentName = names[nameIndex].slice(0, charIndex);
        charIndex++;
        setCurrentName(currentName);
        setTimeout(typeEffect, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        currentName = names[nameIndex].slice(0, charIndex);
        charIndex--;
        setCurrentName(currentName);
        setTimeout(typeEffect, deletingSpeed);
      } else if (!isDeleting && charIndex > names[nameIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBetweenNames);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        nameIndex = (nameIndex + 1) % names.length;
        setTimeout(typeEffect, 1500);
      }
    }
    typeEffect();
    return () => {
      clearTimeout(typeEffect);
    };
  }, [names]);

  return (
    <>
    <Router>
      <body>
      <div className="body-container">
      <Navbar/>
      <Alert alert={alert} />
      <Routes>
      <Route exact path="/" element={ <About showAlert={showAlert} currentName={currentName} /> } />
      <Route exact path="/skills" element={ <Skills/> } />
      <Route exact path="/contact" element={ <Contact/> } />
      </Routes>
      </div>
      </body>
      <Footer currentName={currentName} />
    </Router>
    </>
  );
}

export default App;