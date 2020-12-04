import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {
    Link,
    useHistory,
} from 'react-router-dom'


function Signup() {

    const routeHistory = useHistory()

    const [fullName, setFullName] = useState('')

    const [email, setEmail] =useState('')

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfrimPassword] = useState('')


    const handleFullNameChange =(e) =>{
        setFullName(e.target.value)
    }

    const handleEmailChange =(e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e)=>{
        setConfrimPassword(e.target.value)
    }

    const handleSignUp = (e)=>{
        e.preventDefault();
        if(fullName ==='' || email === '' || password === '' || confirmPassword ===''){
            alert('Signup unsuccessful')
            return
        }

        if(password !== confirmPassword){
            alert('Passwords does not match. Please Try Again')
            return
        }

        routeHistory.push('./dashboard')
    }


    return(
        <div className= 'container'>
            <div className='login-form'>
                <form>
                    <h2 className='text-center'>Sign Up</h2>
                   
                    <div className='form-group'> 
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Full Name'
                        required='text'
                        name='name'
                        value={fullName}
                        onChange={handleFullNameChange}
                        />
                    </div> 

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
                        <input
                        type='password'
                        className='form-control'
                        placeholder='Confirm Password'
                        required='confirm password'
                        name='confirm password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        />
                    </div> 

                    <div className='form-group'>
                        <button
                        className='btn btn-primary btn-block' onClick={handleSignUp}>Sign Up</button>

                    </div>
                    
                    <p className='text-center'> Already have an Account? <Link to ='/login'>Log In</Link></p>

                </form>
               
            </div>

        </div>
    )
}

export default Signup;