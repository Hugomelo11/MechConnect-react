import  Header  from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Body from './components/Body.jsx'
import './App.css';

function App() {

  const addData = () => {
    // const newVehicle = {make: 'Honda', model: 'Accord', year: 2020}/
    fetch('http://localhost:5005', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(newVehicle)
    })
    console.log('Added data')
  }
  return (
    <>

    <button>Get Data</button>
    <button onClick={() => addData()}>Add data</button>
    <header><Header/></header>
    <div>

    <Hero/>
    <Body/>

    </div>

    </>
  );
}

export default App;
