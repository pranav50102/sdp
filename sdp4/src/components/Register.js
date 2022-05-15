import React, { useEffect, useState } from 'react';
import "./Login.css";
import Axios from 'axios';

function Register() { 

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [Phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const RegisterAuth = () =>{
        Axios.post('http://localhost:3001/RegisterAuth',{
            firstname: firstname,
            lastname: lastname,
            Phoneno: Phoneno,
            email: email,
            pwd: pwd,
        });

    };
    


        

    


    return (
        <div className="center">
            <h1>REGISTER</h1>

            <form onSubmit={RegisterAuth}>
            <div className="txt_field">
                    <input type="text" required value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                    <span></span>
                    <label>First Name</label>
                </div>

                <div className="txt_field">
                    <input type="text" required value={lastname} onChange={(e) => setlastname(e.target.value)} />
                    <span></span>
                    <label>Last Name</label>
                </div>

                <div className="txt_field">
                    <input type="text" required value={Phoneno} onChange={(e) => setPhoneno(e.target.value)} />
                    <span></span>
                    <label>phone no</label>
                </div>

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
                <input type="submit" value="Register" />

                <div className="signup_link">
                    Already have an account? <a href="/login">Login</a>
                </div>

            </form>
        </div>
    );
}

export default Register;