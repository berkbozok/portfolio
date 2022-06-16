import React from 'react';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Info from './components/Info';

function List() {
    return (
        <>  
        <ul class="social-icons">
       
        <Name/>
          <li><Facebook/></li>
          <li><Linkedin /></li>
          <li><Github/></li>
          <li><Info/></li>
       </ul>
        </>
    );
  }
  export default List;