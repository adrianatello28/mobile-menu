import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Hamburger menu.json';
import './LottieHamburgerIcon.css';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const lottieRef = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2);
      if (isFirstRun.current) {
        // On initial load, go to the correct frame without animating
        if (isOpen) {
          lottieRef.current.goToAndStop(50, true); // 'X' frame
        } else {
          lottieRef.current.goToAndStop(25, true); // 'hamburger' frame
        }
        isFirstRun.current = false;
      } else {
        // On subsequent clicks, play the correct animation segment
        if (isOpen) {
          lottieRef.current.playSegments([25, 50], true); // hamburger -> X
        } else {
          lottieRef.current.playSegments([0, 25], true); // X -> hamburger
        }
      }
    }
  }, [isOpen]);

  return (
    <div onClick={toggle} className="lottie-hamburger-icon">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
      />
    </div>
  );
};

export default LottieHamburgerIcon;
