import logo from './logo.svg';
import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">

        <div class="title">



          <div class="social-container">
            <ul class="social-icons">
              <h1> Berk Bozok</h1>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><Linkedin /></li>
              <li><a href="#"><i class="fa fa-codepen"></i></a></li>
            </ul>
          </div>

          <a target="_blank" href="https://github.com/berkbozok" class="white-mode">Github</a>
        </div>

      </header>
    </div>
  );
}

export default App;
