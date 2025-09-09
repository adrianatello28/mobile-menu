import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Hamburger menu.json';
import './LottieHamburgerIcon.css';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2);
      if (isOpen) {
        lottieRef.current.playSegments([0, 25], true); // hamburger -> X
      } else {
        lottieRef.current.playSegments([25, 50], true); // X -> hamburger
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
        initialSegment={[0, 0]} // Start and stay at the first frame (hamburger)
      />
    </div>
  );
};

export default LottieHamburgerIcon;
