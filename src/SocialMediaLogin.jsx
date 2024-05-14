import './SocialMediaLogin.css';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
//import './Button.css';
import './AuthForm.css';

function SocialMediaLogin() {
  return (
    <div className="social-media-login">
      <button  onClick={() => alert('Login with Facebook')}>
        {' '}
        <FaFacebookF
          style={{ color: '#395693', fontSize: '15px', textAlign: 'center' }}
        />{' '}
        Facebook
      </button>
{/*       <button onClick={() => alert('Login with Twitter')}>
        {' '}
        <FaTwitter
          style={{ color: '#395693', fontSize: '15px', textAlign: 'center' }}
        />{' '}
        Twitter
      </button> */}
      <button onClick={() => alert('Login with Google')}>
        {' '}
        <FcGoogle style={{ fontSize: '15px', textAlign: 'center' }} /> Google
      </button>
    </div>
  );
}

export default SocialMediaLogin;
