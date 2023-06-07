
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './LoginValidation';
import Validation from './LoginValidation'
import logo from './logo.mp4'
function Login()
{


    const[values,setValues]=useState({
        email: '',
        password:''
    })
    const [errors, setErrors]= useState({})
    const handleInput=(Event) =>{
        setValues(prev=>({...prev,[Event.target.name]:[Event.target.value]}))
    }
    const handleSubmit =(Event) =>{
        Event.preventDefault();
        setErrors(Validation(values));
    }


    return(
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email'  name='email'
                    onChange={handleInput}  className='form-control rounded-0'/>
                      <span className='text-danger'> {errors.email} </span>
                    
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                     onChange={handleInput} className='form-control rounded-0'/>
                       <span className='text-danger'> {errors.password} </span>
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                <strong><center><p>Do not have account?</p></center></strong>
                <Link to = "/signup" className=' btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
    )
}

export default Login