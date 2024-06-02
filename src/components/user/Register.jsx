import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from  'axios'
const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      let payload = {}
      payload.email = email
      payload.name = name
      payload.password= password
      const res =await axios.post('https://gurkul.onrender.com/signup',payload)
      console.log(res)
      if(res.status===201){
        navigate()
      }
    }catch(e){
      console.log(e)
    }
  

  };
 const goLogin= ()=>{
  navigate('/')
 }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white border rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>

          </form>
          <br/>
          <button
              onClick={goLogin}
              className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
