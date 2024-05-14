import { useState } from 'react';
import SocialMediaLogin from './SocialMediaLogin';
import Button from './Button';
import Checkbox from './Checkbox';
import UserForm from './UserForm';
import './AuthForm.css';







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
        <div>
          <h3>Welcome! You have successfully signed on.</h3>{' '}
          <Button onClick={() => setIsSubmitted(false)}>Sign Out</Button>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <UserForm className="userForm"/>
      <p>or login with</p>

      <SocialMediaLogin className ="socialForm" />
      <div>
        <Checkbox
          label="I agree to the Terms and Conditions"
          isChecked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </div>
      <br/> 
      <Button disabled={!isAgreed}>Sign In</Button>
    </form>
  );
}

export default AuthForm;
