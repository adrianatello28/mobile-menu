import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/hamburger-menu-new.json';
import './LottieHamburgerIcon.css';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const lottieRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (lottieRef.current) {
      if (isInitialMount.current) {
        isInitialMount.current = false;
        lottieRef.current.goToAndStop(0, true); // Set initial frame to hamburger
      } else {
        lottieRef.current.setSpeed(2);
        if (isOpen) {
          lottieRef.current.playSegments([0, 25], true); // hamburger -> X
        } else {
          lottieRef.current.playSegments([25, 0], true); // X -> hamburger
        }
      }
    }
  }, [isOpen]);

  return (
    <div onClick={toggle} className="lottie-hamburger-icon">
      <div className="lottie-inner-container">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid meet',
          }}
        />
      </div>
    </div>
  );
};

export default LottieHamburgerIcon;
