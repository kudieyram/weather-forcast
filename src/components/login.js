import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Link,
    useHistory,
} from 'react-router-dom'


function Login() {

    const routeHistory = useHistory()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleEmailChange =(e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }


    const handleLogIn = (e)=>{
        e.preventDefault();
        if( email === '' || password === ''){
            alert('Provide valid Email and Password. Try Again')
            return
        }

        routeHistory.push('./search')    
    }



    return(
        <div className= 'container'>
            <div className='login-form'>
                <form>
                    <h4 className='text-center'>Log In</h4>
                   
                   <div className='form-group'>
                        <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        required='email'
                        name='email'
                        value={email}
                        onChange={handleEmailChange}
                        />
                    </div> 
                       

                    <div className='form-group'>
                      
                        <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        required='password'
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                        />
            
                    </div>  

                    <div className='form-group'>
                        <button
                        className='btn btn-primary btn-block' onClick={handleLogIn}>Log in</button>

                    </div>

                    <p className='text-center'> Not Registered? <Link to ='/signup'>Create an Account</Link></p>
                    
                </form>
                
            </div>

        </div>
    )
}

export default Login;