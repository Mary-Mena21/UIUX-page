import { useState } from 'react';
import SocialMediaLogin from './SocialMediaLogin';
import Button from './Button';
import Checkbox from './Checkbox';

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
        <h1>Welcome! You have successfully signed on.</h1>{' '}
        <Button onClick={() => setIsSubmitted(false)}>Sign Out</Button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <SocialMediaLogin />
      <div>
        <Checkbox
          label="I agree to the Terms and Conditions"
          isChecked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
      </div>
      <Button disabled={!isAgreed}>Sign On</Button>
    </form>
  );
}

export default AuthForm;
