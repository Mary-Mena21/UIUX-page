import React from 'react';
import './SocialMediaLogin.css';

function SocialMediaLogin() {
  return (
    <div className="social-media-login">
      <button onClick={() => alert('Login with Facebook')}>Facebook</button>
      <button onClick={() => alert('Login with Twitter')}>Twitter</button>
      <button onClick={() => alert('Login with Google')}>Google</button>
    </div>
  );
}

export default SocialMediaLogin;
