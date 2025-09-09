import React, { useRef, useEffect } from 'react';
import './SubMenuDetail.css';
import backIcon from '/src/assets/images/back-icon.svg';

const SubMenuDetail = ({ title, onBack, onScrollChange }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const handleScroll = () => {
      if (!scrollContainer) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 1;
      onScrollChange(!isAtBottom);
    };

    if (scrollContainer) {
      handleScroll();
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [onScrollChange]);

  return (
    <div className="sub-menu-detail" ref={scrollRef}>
      <div className="sub-menu-detail__header">
        <button onClick={onBack} className="sub-menu-detail__back-button">
          <img src={backIcon} alt="Volver" className="sub-menu-detail__back-icon" />
        </button>
        <h1 className="sub-menu-detail__title">{title}</h1>
      </div>
      <div className="sub-menu-detail__content">
        <p>Contenido para {title}...</p>
      </div>
    </div>
  );
};

export default SubMenuDetail;
