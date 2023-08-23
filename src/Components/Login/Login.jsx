import React, { useEffect, useState } from 'react'
import useData from '../../hooks/useData'
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { data, setLogin } = useData();

    useEffect(() => {
        if (localStorage.getItem("userEmail")) {
            setLogin(true);
            navigate("/profile");
        }
    }, [])

    const goToSignup = () => {
        navigate('/');
    }

    const dataSubmitted = () => {
        const url = "http://localhost:5000/authenticate-user/"
        const userData = {
            userEmail,
            password
        }
        if (userEmail === "" || password === "") {
            alert("Please fill all inputs");
        }
        else {
            axios.post(url, userData)
                .then(res => {
                    console.log(res.data);
                    setLogin(true);
                    navigate('/profile');
                    localStorage.setItem("userEmail", userEmail);
                })
                .catch(err => console.log("err:", err));
        }

    }
    return (
        <div className='login'>
            <div className='allInputs'>
                <h1>Login</h1>
                <input type="email"
                    className='inputs'
                    placeholder='Email'
                    onChange={e => { setUserEmail(e.target.value) }}
                    value={userEmail} />

                <br />

                <input type="password"
                    className='inputs'
                    placeholder='Password'
                    onChange={e => { setPassword(e.target.value) }}
                    value={password} />

                <br />

                <button className='submitBtn' onClick={dataSubmitted}>Login</button>
                <div className='one'>
                    <button onClick={goToSignup} className='account-already-exist'>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login
