import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path ="/" element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
