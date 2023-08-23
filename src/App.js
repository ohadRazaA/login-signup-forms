import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
