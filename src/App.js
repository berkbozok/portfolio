import logo from './logo.svg';
import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">

        <div class="title">



          <div class="social-container">
            <ul class="social-icons">
              <h1> Berk Bozok</h1>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><Linkedin /></li>
              <li><Github/></li>
              <li><a href="#"><i class="fa fa-info"></i></a></li>
            </ul>
          </div>

         
        </div>

      </header>
    </div>
  );
}

export default App;
