import logo from './logo.svg';
import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    
      <header className="App-header">
             
<nav class="social">
          
      </nav>

        <div class="title">

          <div class="social-container">
            
            <ul class="social-icons">
       
              <Name/>
              <li><Facebook/></li>
              <li><Linkedin /></li>
              <li><Github/></li>
              <li><a href="#"><i class="fa fa-info"></i></a></li>
            </ul>
            
          </div>

         
        </div>

      </header>
    
  );
}

export default App;
