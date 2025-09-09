import React from 'react';
import './SubMenuDetail.css';
import backIcon from '/src/assets/images/back-icon.svg';

const SubMenuDetail = ({ title, onBack }) => {
  return (
    <div className="sub-menu-detail">
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
