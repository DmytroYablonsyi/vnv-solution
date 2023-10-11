import React, { useEffect, useState } from 'react';

import './App.css';
import Faq from './components/FAQ/faqList';
import About from './components/about/aboutList';
import Brief from './components/brief';
import Logo from './components/logo';
import Projects from './components/projects/projectsList';
import Services from './components/services/servicesList';
import SocialNetwork from './components/social_network';
import Contacts from './components/contacts'
import Widget from './components/widget';


function App() {
const [active, setActive] = useState(false)
const toggle = () => {
 setActive(false)
}
useEffect(() => {
  setTimeout(() => (setActive(true)),2500)
},[])
  return (
    <div>
    {
      active && <Widget toogleHandle={toggle}/>
      }
        <div className="App">
            <Logo/>   
            <About/> 
            <Services/>
            <Projects/>
            <Contacts/>
            <Brief/> 
            <Faq/>  
            <SocialNetwork/>
        </div>
    </div>
  );
}

export default App;
