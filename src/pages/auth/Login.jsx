import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../schema/login';
import dashboardImg from '../../assets/images/11667717_20945567.svg'
import cmpnyLogo from '../../assets/images/company-logo.png'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

function Login() {
  const [loader, setloader] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  })
  const { login } = useContext(AuthContext)
  function getRandomString(length = 12) {
    return Math.random().toString(36).substring(2, 2 + length);
  }
  const loginHandler = (data) => {
    console.log("LOGING DATA", data)
    setloader(true)
    setTimeout(() => {
      const authToken = getRandomString()
      login(authToken, data.username)
      setloader(false)
    }, 3000)

  }
  return (
    // <div className="flex items-center justify-center min-h-screen  overflow-hidden px-4">
    <div className="min-h-screen flex items-center justify-center bg-[#f0f4fc]">
      <div className="loginContainer flex flex-col md:flex-row max-w-5xl mx-auto p-2 bg-[#aec6fb] shadow-lg rounded-2xl w-full">
        <div className="loginLeftSection w-full md:w-1/2 flex flex-col justify-between p-6">
          <div className="text-center mb-6">
            <img className="mx-auto w-50 h-auto" src={cmpnyLogo} alt="Company Logo" />
            <p className="text-[20px] text-[#838080] mt-3">Enter your credential and Login Here</p>
          </div>

          <form className="flex flex-col space-y-4 p-3" onSubmit={handleSubmit(loginHandler)}>
            <div>
              <label className="block text-[#6c6a6a] text-[18px]">Username</label>
              <input
                type="text"
                {...register('username')}
                className={`border ${errors?.username?.message ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-[#a0bed8] focus:border-[#a0bed8]'} rounded-md px-4 py-2 w-full bg-white focus:outline-none`}
              />
              <p className='text-red-600 text-left'>{errors?.username?.message}</p>
            </div>

            <div>
              <label className="block text-[#6c6a6a] text-[18px]">Password</label>
              <input
                type="password"
                {...register('password')}
                className={`border ${errors?.password?.message ? 'border-red-600 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-[#a0bed8] focus:border-[#a0bed8]'} rounded-md px-4 py-2 w-full bg-white focus:outline-none`}
              />
              <p className='text-red-600 text-left'>{errors?.password?.message}</p>
            </div>

            <button type='submit' className="bg-[#13097d] text-white py-2 px-3 rounded-md text-[18px] mt-2 mb-4" disabled={loader}>
              {loader ? <span>processing...</span> : 'Login'}
            </button>
          </form>
        </div>

        
        <div className="loginRightSection w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#13097d] to-[#3b4cca] text-white shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-center text-lg mb-6 max-w-md">
            We're glad to see you again. Log in to continue accessing your personalized dashboard and features.
          </p>
          <img
            src={dashboardImg}
            alt="Dashboard Preview"
            className="max-w-xs md:max-w-sm h-auto rounded-lg shadow-md border-2 border-white"
          />
        </div>
      </div>
    </div>


    // {/* </div> */}



  )
}

export default Login