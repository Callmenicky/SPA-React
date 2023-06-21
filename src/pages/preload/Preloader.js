import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner">
        <div className = "pl_left">
          <div>We're</div>
          <div>GrowthOps</div>
        </div>
        <div className = "pl_right">
          <div className = "pl_right__pill ">Asia</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
