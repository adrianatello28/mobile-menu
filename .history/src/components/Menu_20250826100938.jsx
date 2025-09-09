import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';
import item1 from '/src/assets/images/item-1.png';
import logo from '/src/assets/images/logo.svg';
import drawer from '/src/assets/images/drawer.svg';
import logoWhite from '/src/assets/images/logo-white.svg';
import close from '/src/assets/images/close.svg';
import seta from '/src/assets/images/seta.svg';
import chevronRight from '/src/assets/images/chevron-right.svg';
import chevronRightNew from '/src/assets/images/chevron-right-new.svg';
import padlockClosed from '/src/assets/images/padlock-closed.svg';
import helper from '/src/assets/images/helper.svg';


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="menu__initial-state"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="header header--yellow">
              <div className="header__menu">
                <div className="header__content-left">
                  <img src={logo} alt="Logo" className="header__logo" />
                </div>
                <div className="header__content-right">
                  <button className="button button--login">Iniciar sessão</button>
                  <img src={drawer} alt="Drawer" className="header__drawer" onClick={toggleMenu} />
                </div>
              </div>
            </header>
            <div className="menu__item-1" style={{ backgroundImage: `url(${item1})` }}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.header
              className="header header--white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="header__menu">
                <div className="header__content-left">
                  <img src={logoWhite} alt="Logo" className="header__logo" />
                </div>
                <div className="header__content-right">
                  <button className="button button--login-alt">Iniciar sessão</button>
                  <img src={close} alt="Close" className="header__close" onClick={toggleMenu} />
                </div>
              </div>
            </motion.header>

            <motion.div
              className="menu__mobile"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
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
                            <img src={chevronRightNew} alt="Seta" className="menu-item__arrow" />
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
