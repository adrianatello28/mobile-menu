import React from 'react';
import './SubMenu.css';
import prueba21 from '/src/assets/images/prueba21.png';
import iconArrow from '/src/assets/images/icon-arrow.svg';
import backIcon from '/src/assets/images/back-icon.svg';

const SubMenu = ({ onBack, onSelectItem }) => {
  return (
    <div className="sub-menu">
      <div className="sub-menu__header">
        <button onClick={onBack} className="sub-menu__back-button">
          <img src={backIcon} alt="Volver" className="sub-menu__back-icon" />
        </button>
        <h1 className="sub-menu__title">Conta Digital</h1>
      </div>
      <div className="sub-menu__container">
        <div className="sub-menu__account">
          <div className="sub-menu__account-image" style={{ backgroundImage: `url(${prueba21})` }} />
          <a href="#" className="sub-menu__account-cta">
            <span>Conhecer Conta Digital</span>
            <img src={iconArrow} alt="Arrow" className="sub-menu__cta-icon" />
          </a>
        </div>
        <div className="sub-menu__list">
          <div className="sub-menu__list-item">
            <h2 className="sub-menu__list-title">RENDIMIENTOS</h2>
            <div className="sub-menu__product" onClick={() => onSelectItem('Cofrinhos')}>
              <p className="sub-menu__product-title">Cofrinhos</p>
              <p className="sub-menu__product-description">Rendem até 120% do CDI</p>
            </div>
            <div className="sub-menu__product" onClick={() => onSelectItem('Dinheiro na conta')}>
              <p className="sub-menu__product-title">Dinheiro na conta</p>
              <p className="sub-menu__product-description">Rende até 105% do CDI</p>
            </div>
          </div>
          <div className="sub-menu__list-item">
            <h2 className="sub-menu__list-title">CRÉDITO</h2>
            <div className="sub-menu__product" onClick={() => onSelectItem('Cartão')}>
              <p className="sub-menu__product-title">Cartão</p>
            </div>
            <div className="sub-menu__product" onClick={() => onSelectItem('Linha de crédito')}>
              <p className="sub-menu__product-title">Linha de crédito</p>
            </div>
          </div>
          <div className="sub-menu__list-item">
            <h2 className="sub-menu__list-title">SERVIÇOS</h2>
            <div className="sub-menu__product" onClick={() => onSelectItem('Pagamentos e tarifas')}>
              <p className="sub-menu__product-title">Pagamentos e tarifas</p>
            </div>
            <div className="sub-menu__product" onClick={() => onSelectItem('Seguros')}>
              <p className="sub-menu__product-title">Seguros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
