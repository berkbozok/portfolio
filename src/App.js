import './App.css';
import './SocialButton.scss';
import Linkedin from './components/Linkedin';
import Github from './components/Github';
import Facebook from './components/Facebook';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import List from './components/List';
import TitleAndButton from './components/TitleAndButton';


const App = () => {
  return (

    <header className="App-header">

      <nav class="social">

      </nav>
      <ul class="social-icons">

        <Name/>
        <li><Facebook /></li>
        <li><Linkedin /></li>
        <li><Github /></li>
        <li><Info /></li>
        
      </ul>

      <button class="more-button" onclick="https://github.com/berkbozok/login-demo">
        <div></div>
      </button >

    </header>

  );
}

export default App;
