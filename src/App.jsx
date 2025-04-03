import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Content from './components/Content';
import Trustby from './components/Trustby';
import OurPromise from './components/OurPromise'; 
import Footer from './components/Footer';
import UserCase from './components/User-case';


function App() {  
  return (
      <div>
        <About/>
        <Skill/>
        <Contact/>
        <Content/>
        <Trustby/>
        <OurPromise/>
        <UserCase/>
        <Footer/>
      </div>   
    
  );  
}

export default App;
