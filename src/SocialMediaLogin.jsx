import './SocialMediaLogin.css';
// import { FaFacebookF, FaTwitter } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
//import './Button.css';
import './AuthForm.css';

function SocialMediaLogin() {
  return (
    <>
      {/* -----------v1---------------
          <div className="social-media-login">
      <button  onClick={() => alert('Login with Facebook')}>
        {' '}
        <FaFacebookF
          style={{ color: '#395693', fontSize: '15px', textAlign: 'center' }}
        />{' '}
        Facebook
      </button>
      <button onClick={() => alert('Login with Twitter')}>
        {' '}
        <FaTwitter
          style={{ color: '#395693', fontSize: '15px', textAlign: 'center' }}
        />{' '}
        Twitter
      </button>
      <button onClick={() => alert('Login with Google')}>
        {' '}
        <FcGoogle style={{ fontSize: '15px', textAlign: 'center' }} /> Google
      </button>
    </div> */}
       {/* -----------v2--------------- */}
      <div className="flex-c-m">
        <a href="#" className="login100-social-item bg1">
          <i className="fa fa-facebook"onClick={() => alert('Login with Facebook')}></i>
        </a>
        <a href="#" className="login100-social-item bg2">
          <i className="fa fa-twitter" onClick={() => alert('Login with Twitter')}></i>
        </a>
        <a href="#" className="login100-social-item bg3">
          <i className="fa fa-google" onClick={() => alert('Login with Google')}></i>
        </a>
      </div>
    </>
  );
}

export default SocialMediaLogin;
