import React from 'react';
import './Menu.css';
import item1 from '../assets/images/item-1.png';
import logo from '../assets/images/logo.svg';
import drawer from '../assets/images/drawer.svg';
import logoWhite from '../assets/images/logo-white.svg';
import close from '../assets/images/close.svg';
import seta from '../assets/images/seta.svg';
import chevronRight from '../assets/images/chevron-right.svg';
import padlockClosed from '../assets/images/padlock-closed.svg';
import helper from '../assets/images/helper.svg';


const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__initial-state">
        <header className="header header--yellow">
          <div className="header__menu">
            <div className="header__content-left">
              <img src={logo} alt="Logo" className="header__logo" />
            </div>
            <div className="header__content-right">
              <button className="button button--login">Iniciar sessão</button>
              <img src={drawer} alt="Drawer" className="header__drawer" />
            </div>
          </div>
        </header>
        <div className="menu__item-1" style={{ backgroundImage: `url(${item1})` }}></div>
      </div>

      <header className="header header--white">
        <div className="header__menu">
          <div className="header__content-left">
            <img src={logoWhite} alt="Logo" className="header__logo" />
          </div>
          <div className="header__content-right">
            <button className="button button--login-alt">Iniciar sessão</button>
            <img src={close} alt="Close" className="header__close" />
          </div>
        </div>
      </header>

      <div className="menu__mobile">
        <div className="menu__page-container">
          <div className="menu__content">
            <h1 className="menu__title">
              A conta completa <br />
              do Mercado Livre
            </h1>
            <div className="menu__menu-all">
              <div className="menu__menu-items">
                <div className="menu-item">
                  <div className="menu-item__title-item">
                    <h2 className="menu-item__title">Conta Digital</h2>
                    <div className="menu-item__right">
                      <img src={seta} alt="Seta" className="menu-item__arrow" />
                    </div>
                  </div>
                  <p className="menu-item__description">A conta que mais rende do Brasil</p>
                </div>
                <div className="menu-item">
                  <div className="menu-item__title-item">
                    <h2 className="menu-item__title">Conta Negocio</h2>
                    <div className="menu-item__right">
                        <img src={chevronRight} alt="Chevron Right" className="menu-item__chevron" />
                    </div>
                  </div>
                  <p className="menu-item__description">Soluções de venda, gestão e crédito</p>
                </div>
              </div>
              <div className="menu__secondary-menu">
                <h3 className="menu__secondary-title">Acesso rápido</h3>
                <div className="menu__secondary-items">
                  <div className="card">
                    <div className="card__text">
                      <img src={padlockClosed} alt="Padlock Closed" className="card__icon" />
                      <p className="card__description">Me roubaram</p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card__text">
                      <img src={helper} alt="Helper" className="card__icon" />
                      <p className="card__description">Ajuda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu__bottom-cta">
            <div className="menu__bg-cta"></div>
            <button className="button button--cta-end">Abrir conta grátis</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
