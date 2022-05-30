import logo from './logo.svg';
import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';

const App = () => {
  return (
    
      <header className="App-header">
             <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
<nav class="social">
  
 
          <ul>
              <li><a href="https://twitter.com/highflyer910">Twitter <i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/highflyer910">Github <i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/teonamushambadze">Linkedin <i class="fa fa-linkedin"></i></a></li>
              </ul>
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
