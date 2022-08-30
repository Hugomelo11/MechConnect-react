import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Body from "./components/Body.jsx";
import "./App.css";
import './styles/Hero.css'
import './styles/Header.css'
import './styles/Body.css'


function App() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <Hero />
      <Body />
    </body>
  );
}
 
export default App;
