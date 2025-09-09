import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Hamburger menu.json';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      if (isOpen) {
        lottieRef.current.playSegments([0, 29], true); // Play forward
      } else {
        lottieRef.current.playSegments([29, 0], true); // Play backward
      }
    }
  }, [isOpen]);

  return (
    <div onClick={toggle} className="lottie-icon-container">
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
