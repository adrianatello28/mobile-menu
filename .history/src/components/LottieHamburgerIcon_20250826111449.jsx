import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Hamburger menu.json';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (isOpen) {
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
    } else {
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
    }
  }, [isOpen]);

  return (
    <div onClick={toggle} style={{ width: 48, height: 48, cursor: 'pointer' }}>
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
