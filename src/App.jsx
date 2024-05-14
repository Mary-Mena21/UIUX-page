import AuthForm from './AuthForm';
import './App.css';
import Navbar from './Navbar';
// import HeroImg from './HeroImg';

function App() {
  return (
    <>
      <div className="grid-container">
        {/* <Navbar className="header" />
        <AuthForm className="left" />
        <div className="middle hero-image"></div>
        <div className="footer">
          <p>Footer</p>
        </div> */}
        <div className="header">
          <Navbar />
        </div>

        <div className="left ">
          <AuthForm />
        </div>
        <div className="middle hero-image"></div>

        <footer className="footer">
          <br />
          &copy; Copyright 2024 UI-UX
        </footer>
      </div>
    </>
  );
}

export default App;
