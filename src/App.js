import React from 'react';
import girl1 from './images/hero-desktop.jpg';
import girl2 from './images/hero-mobile.jpg';
import logo from './images/logo.svg';
import Email from './Email';



function App() {
  return (
    <div className='mainContainer'>
      <header><img className='logo' src={logo} alt='logo'></img> </header>
      <img className='girl1' src={girl1} alt='girl'></img>
      <img className='girl2' src={girl2} alt='girl'></img>
      <section>
        <div className='backgroundImage'></div>
        <h1 className='firstHead' style={{color: 'hsl(0, 36%, 70%)',fontWeight:300}}>W E ' R E</h1>
        <h1>C O M I N G</h1>
        <h1>S O O N</h1>
        <p style={{color: 'hsl(0, 36%, 70%)'}}>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcments and our launch deals.</p>
      <Email/>
      </section>
    </div>
  );
}

export default App;
