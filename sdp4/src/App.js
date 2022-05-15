import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Home1 from './components/Home1'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Home1' element={<Home1/>}/>

        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
