import React, { useEffect, useState } from 'react';
import "./Login.css";

function Login() { 

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    async function loginAuth(event) {

        event.preventDefault()

        const response = await fetch('http://localhost:3001/loginAuth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                email,
                pwd
            })
        })

        const data = await response.json()

        if(data.Regis) {
            
            alert('Welcome');

           window.location.href='/Home1';
        }
        else {
            alert('Please check your email or password')
        }
    }


    


    return (
        <div className="center">
            <h1>LOGIN</h1>

            <form onSubmit={loginAuth}>

                <div className="txt_field">
                    <input type="text" required autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span></span>
                    <label>Email</label>
                </div>

                <div className="txt_field">
                    <input type="password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />
                    <span></span>
                    <label>Password</label>
                </div>

                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />

                <div className="signup_link">
                    Not a member? <a href="/register">Register</a>
                </div>

            </form>
        </div>
    );
}

export default Login;