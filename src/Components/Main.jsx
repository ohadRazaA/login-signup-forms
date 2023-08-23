import React from 'react'
import useData from '../hooks/useData'
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const { login, setLogin } = useData();
  
  if (localStorage.getItem("userEmail")) {
    setLogin(true);
  }
  const logout = ()=>{
    localStorage.removeItem("userEmail");
    setLogin(false);
    navigate("/login");
  }

  return (
    <div>
      {
        login && localStorage.getItem("userEmail") ?
          <div>
            <h1>Profile</h1>
            <button onClick={logout}>Logout</button>
          </div>

          : <h1>Masti krta hai baaz aaja, pahle login kr k aa</h1>
      }
    </div>
  )
}

export default Main
