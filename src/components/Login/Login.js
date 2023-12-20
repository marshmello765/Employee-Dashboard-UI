import React , { useEffect, useReducer }from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import  LoginLogo  from './images/LoginLogo.png'
import './Login.css';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const history = useHistory();
  useEffect(() => {
    // Perform actions when component mounts or route changes
    // For example, fetching data or refreshing component state
    Navigate(); // Your function to fetch data
  }, [history.location.pathname]); // Run when the pathname changes

  const Navigate = () => {
    <Navigate to="/employee-list" />;
  };
 

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleEmailChange = (e) => {
     setEmail(e.target.value);
   };
 
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     // Handle login logic here with email and password
     console.log('Email:', email);
     console.log('Password:', password);
     // You can perform your authentication logic here
   };

   const handleLogin = () => {
    // Validate login, if successful:
    // Redirect to employee list
    console.log('Login successful');
    history.push('/employee-list');
  };
 
   return (
     <div className='login-grid'>
       <div className="logo">
         <img src={LoginLogo} alt="Logox" />
       </div>
       <div className="electric-text">
         <h2>#We are Electric</h2>
       </div>
       <form onSubmit={handleSubmit}>
         <div className="form-group">
           <input
             type="email"
             placeholder="Email"
             value={email}
             onChange={handleEmailChange}
             required
           />
         </div>
         <div className="form-group">
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={handlePasswordChange}
             required
           />
         </div>
         <div className="form-group">
           <button type="submit" onClick={handleLogin} >Login</button>
         </div>
       </form>
       <div className="forgot-password">
         {/* Link to forgot password page */}
         <a>Forgot password?</a>
       </div>
     </div>
   );
 };
 
Login.defaultProps = {};

export default Login;
