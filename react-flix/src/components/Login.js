import React, { useRef, useState } from 'react'
import Header from './Header';
import { LOGIN_BG_IMG } from '../utils/constants';
import { checkLoginData } from '../utils/validation';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const toggleLoginForm = () => {
    setIsLogin(!isLogin);
  }

  const handleLogin = () => {
    const error = checkLoginData(email.current.value, password.current.value);
    console.log(error);
    setErrorMessage(error);
    if(!error) {
      dispatch(addUser({id: "123", name: "Ketan Suthar", email: "ks@gmail.com"}));
      navigate("/browse");
    }
  }

  const loginInForm = () => {
    return (
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
        <h1 className='font-bold text-3xl py-3'>Login</h1>
        <p className='text-red-600'>{errorMessage}</p>
        <input ref={email} type='text' placeholder='email' className='p-2 my-2 w-full bg-slate-300 rounded-md'/>
        <input ref={password} type='password' placeholder='password' className='p-2 my-2 w-full bg-slate-300 rounded-md'/>
        <button onClick={handleLogin} className='p-4 my-4 bg-red-700 w-full rounded-md'>Login</button>
        <p className='p-4 cursor-pointer' onClick={toggleLoginForm}>SingUp</p>
      </form>
    )
  }

  const singUpForm = () => {
    return (
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75'>
        <h1 className='font-bold text-3xl py-3'>SingUp</h1>
        <p className='text-red-600'>{errorMessage}</p>
        <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-slate-300 rounded-md'/>
        <input ref={email} type='text' placeholder='email' className='p-2 my-2 w-full bg-slate-300 rounded-md'/>
        <input ref={password} type='password' placeholder='password' className='p-2 my-2 w-full bg-slate-300 rounded-md'/>
        <button onClick={handleLogin} onSubmit={(e) => e.preventDefault()} className='p-4 my-4 bg-red-700 w-full rounded-md'>SingUp</button>
        <p className='p-4 cursor-pointer' onClick={toggleLoginForm}>Login</p>
      </form>
    )
  }
  
  return (
    <div>
      <Header/>
      <div>
        <img className='absolute' alt="bg" src={LOGIN_BG_IMG} />
      </div>
        {isLogin ? loginInForm() : singUpForm()}
    </div>
  )
}


export default Login;

