import './App.css';
import Nav from './Components/nav-bar';
import Main from './Components/main';
import Intro from './Components/intro';
import Featured from './Components/featured';
import AllPlants from './Components/all-plants';
import Help from './Components/help';
import Test from './Components/testimonial';
import Intrest from './Intrest';
import Contact from './Contact';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Main/>
        <Intro/>
        <Featured/>
        <AllPlants/>
        <Help/>
        <Test/>
        <Intrest/>
        <Contact/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
