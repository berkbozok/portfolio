import logo from './logo.svg';
import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import List from './components/List';


const App = () => {
  return (
    
      <header className="App-header">
             
<nav class="social">
          
      </nav>

        <div class="title">

          <div class="social-container">
          
            <List/>
            
          </div>

         
        </div>
        
        <button class="more-button" onclick="https://github.com/berkbozok/login-demo">
          <div></div>
          </button >

      </header>
    
  );
}

export default App;
