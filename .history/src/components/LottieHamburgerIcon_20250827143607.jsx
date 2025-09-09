import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/animations/Hamburger menu.json';
import './LottieHamburgerIcon.css';

const LottieHamburgerIcon = ({ isOpen, toggle }) => {
  const container = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (container.current) {
      anim.current = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      return () => anim.current?.destroy();
    }
  }, []);

  useEffect(() => {
    if (anim.current) {
      if (isOpen) {
        anim.current.setDirection(1);
        anim.current.play();
      } else {
        anim.current.setDirection(-1);
        anim.current.play();
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={container}
      onClick={toggle}
      className="lottie-hamburger-icon"
    />
  );
};

export default LottieHamburgerIcon;
