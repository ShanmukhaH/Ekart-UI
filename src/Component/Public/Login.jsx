import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const respond= (event) =>{
    event.preventDefault();
    console.log(username);
    console.log(password);
    
}

  return ( 
    <div className='flex justify-center m-auto mt-16 w-fit border-yellow-100 border-2 shadow-2xl  rounded-xl'>
    <div className='p-2 flex-col flex justify-center items-center w-72  bg-yellow-200 rounded-l-lg'>
      <span className='p-2 font-mono font-bold text-5xl '>Login</span>
      <p className='p-2'>Get access to your Orders, Wishlist and Recommendations</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Register Image"  className='h-32 mt-20'/>
   </div>

   <div className='p-2 flex-col flex justify-center items-center w-96 h-80'>
   <input type="text" placeholder='email address' onChange={(event) => setUsername(event.target.value)} className='p-2 border-2 border-gray-500 w-80 h-10 rounded-xl ' /> <br />
   <input type="text" placeholder='password' onChange={(event) => setPassword(event.target.value)} className='p-2 border-2 border-gray-500  w-80 h-10 rounded-xl' /> <br />
   <button onClick={respond} className='p-2 bg-orange-300  rounded-3xl font-bold font-sans w-80  justify-center'>Login</button>
   <a href="/customer/register" className='text-blue-600 mt-20 '>New to eKart ? Create an account</a>
 </div>
    </div>
    
  )
}

export default Login
