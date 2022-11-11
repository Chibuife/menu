import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Objects from './Components/Objects';

function App() {
  const [menuObject, setMenuObject] = useState([...Objects])
  return (
    <div>
    <Header/>
    <Menu/>
    <Cards menuObject={menuObject}/>
    </div>
  );
}

export default App;
