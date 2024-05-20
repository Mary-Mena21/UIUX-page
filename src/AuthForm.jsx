import { useState } from 'react';
// import SocialMediaLogin from './SocialMediaLogin';
// import Button from './Button';
import Checkbox from './Checkbox';
// import UserForm from './UserForm';
import './AuthForm.css';
import './main.css';
import SocialMediaLogin from './SocialMediaLogin';

function AuthForm() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAgreed) {
      setIsSubmitted(true);
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  if (isSubmitted) {
    return (
      <>
        {/* -----------v1---------------
         <form classNameName="form">
          <p>Welcome! You have successfully signed on.</p>
          <Button onClick={() => setIsSubmitted(false)}>Sign Out</Button>
        </form> */}
        {/* -----------v2--------------- */}
        <div className="container-login100">
          <div className="wrap-login100 p-l-60 p-r-60 p-t-60 p-b-60">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-4">Welcome!</span>
              <p>You have successfully signed in.</p>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button
                    className="login100-form-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* -----------v1---------------
           <form onSubmit={handleSubmit} className="form">
      <UserForm classNameName="userForm" />
      <p>or login with social media</p>

      <SocialMediaLogin classNameName="socialForm" />
      <div>
        <Checkbox
          label="I agree to the Terms and Conditions"
          isChecked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </div>
      <br />
      <Button disabled={!isAgreed}>SignIn</Button>
    </form> */}
      {/* -----------v2--------------- */}
      <div className="container-login100" onSubmit={handleSubmit}>
        <div className="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-30">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-4">Login</span>
            <div
              className="wrap-input100 validate-input m-b-2"
              data-validate="Username is reauired"
            >
              <span className="label-input100">Username</span>
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Type your username"
                required
              />
              <span className="focus-input100" data-symbol=""></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Type your password"
                required
              />
              <span className="focus-input100" data-symbol=""></span>
            </div>
            <div>
              {' '}
              <Checkbox
                label="I agree to the Terms and Conditions"
                isChecked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
            </div>
            <div className="text-right p-t-8 p-b-8">
              <a href="#">Forgot password?</a>
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" disabled={!isAgreed}>
                  Login
                </button>
              </div>
            </div>
            <div className="txt1 text-center p-t-5 p-b-2">
              <span>Or Sign Up Using</span>
            </div>
            {/* <div className="flex-c-m">
              <a href="#" className="login100-social-item bg1">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="login100-social-item bg2">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="login100-social-item bg3">
                <i className="fa fa-google"></i>
              </a>
            </div> */}
            <SocialMediaLogin />
            <div className="flex-col-c p-t-5">
              <span className="txt1 p-b-1">Or Sign Up Using</span>
              <a href="#" className="txt2">
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
