import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup({ setUserInfo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    setUserInfo({ email, password });
    navigate('/login');
  };



  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
