import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Create a CSS file for custom styles if needed
import Preloader from './preload/Preloader';
import HomePage from './HomePage';

function Start() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
       // Update the loading state after the operation is completed
    }, 1500);
  }, []);

  return (
    <div>
      <CSSTransition
        in={loading}
        timeout={3000}
        classNames="preloader-transition"
        unmountOnExit
      >
        <Preloader />
      </CSSTransition>
      <CSSTransition
        in={!loading}
        //timeout={10000}
        classNames="page-transition"
        unmountOnExit
      >
        <HomePage />
      </CSSTransition>
    </div>
  );
}

export default Start;
