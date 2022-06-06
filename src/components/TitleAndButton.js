import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import List from './components/List';
import React from 'react';


function TitleAndButton() {
    return (
        <>  
         <div class="title">

          <div class="social-container">
          
            <List/>
            
          </div>
        </div>
        </>
    );
  }
  export default TitleAndButton;