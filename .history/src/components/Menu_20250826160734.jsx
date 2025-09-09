import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';
import item1 from '/src/assets/images/item-1.png';
import logo from '/src/assets/images/logo.svg';
import logoWhite from '/src/assets/images/logo-white.svg';
import chevronRightNew from '/src/assets/images/chevron-right-new.svg';
import padlockClosed from '/src/assets/images/padlock-closed.svg';
import helper from '/src/assets/images/helper.svg';
import LottieHamburgerIcon from './LottieHamburgerIcon';
import SubMenu from './SubMenu';
import SubMenuDetail from './SubMenuDetail';
import ContaNegocio from './ContaNegocio';

const headerVariants = {
  open: {
    backgroundColor: "#ffffff",
    transition: { duration: 0.2 }
  },
  closed: {
    backgroundColor: "#ffe600",
    transition: { delay: 0.15, duration: 0.2 } // Tighter sync with menu close
  }
};

const mobileMenuVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
    transition: {
      duration: 0.3, // Snappier close
      ease: "easeInOut" // Smoother easing
    }
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.4, // Faster entry
      ease: "easeInOut" // Smoother easing
    }
  }
};

const slideScreenVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delay: i === 0 ? 0.30 : (i === 1 ? 0.45 : 0.55),
    },
  }),
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('main'); // 'main', 'digital', 'negocio', 'detail'
  const [detailTitle, setDetailTitle] = useState('');
  const [isReturning, setIsReturning] = useState(false);


  const toggleMenu = () => {
    if (isOpen) {
      setView('main');
      setIsReturning(false);
    }
    setIsOpen(!isOpen);
  };

  const showSubMenu = (menu) => {
    setView(menu);
    setIsReturning(false);
  };

  const showDetail = (title) => {
    setDetailTitle(title);
    setView('detail');
  };

  const goBack = () => {
    if (view === 'detail') {
      // This is a simplification. A real app might need to know which submenu to return to.
      // For now, we assume detail only comes from 'digital'.
      setView('digital');
    } else if (view === 'digital' || view === 'negocio') {
      setView('main');
      setIsReturning(true);
    }
  };

  return (
    <div className="menu">
      <motion.header
        className="header"
        variants={headerVariants}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      >
        <div className="header__menu">
          <div className="header__content-left">
            <img src={isOpen ? logoWhite : logo} alt="Logo" className="header__logo" />
          </div>
          <div className="header__content-right">
            <button className={`button ${isOpen ? 'button--login-alt' : 'button--login'}`}>
              Iniciar sessão
            </button>
            <LottieHamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="menu__initial-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu__item-1" style={{ backgroundImage: `url(${item1})` }} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu__mobile"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="menu__page-container">
              {/* Main Menu - always rendered in the background */}
              <motion.div
                key="main-menu-content"
                className="main-menu-content-wrapper"
                initial={isReturning ? 'visible' : 'hidden'}
                animate={view === 'main' ? 'visible' : 'hidden'}
                variants={{
                  hidden: { opacity: 0.5, pointerEvents: 'none' },
                  visible: { opacity: 1, pointerEvents: 'auto' },
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="menu__content"
                  // This wrapper ensures children re-animate correctly if needed, but they won't due to parent logic
                >
                  <motion.h1 className="menu__title" custom={0} variants={slideDown}>
                    A conta completa <br />
                    do Mercado Livre
                  </motion.h1>
                  <motion.div className="menu__menu-all" custom={1} variants={slideDown}>
                    <div className="menu__menu-items">
                      <div className="menu-item" onClick={() => showSubMenu('digital')}>
                        <div className="menu-item__title-item">
                          <h2 className="menu-item__title">Conta Digital</h2>
                          <div className="menu-item__right">
                            <img src={chevronRightNew} alt="Seta" className="menu-item__arrow" />
                          </div>
                        </div>
                        <p className="menu-item__description">A conta que mais rende do Brasil</p>
                      </div>
                      <div className="menu-item" onClick={() => showSubMenu('negocio')}>
                        <div className="menu-item__title-item">
                          <h2 className="menu-item__title">Conta Negocio</h2>
                          <div className="menu-item__right">
                            <img src={chevronRightNew} alt="Chevron Right" className="menu-item__arrow" />
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
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Overlays - SubMenu and Detail */}
              <AnimatePresence>
                {view === 'digital' && (
                  <motion.div
                    key="submenu-digital"
                    className="submenu-container"
                    variants={slideScreenVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <SubMenu onBack={goBack} onSelectItem={showDetail} />
                  </motion.div>
                )}

                {view === 'negocio' && (
                  <motion.div
                    key="submenu-negocio"
                    className="submenu-container"
                    variants={slideScreenVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ContaNegocio onBack={goBack} onSelectItem={showDetail} />
                  </motion.div>
                )}

                {view === 'detail' && (
                  <motion.div
                    key="submenu-detail"
                    className="submenu-container" // Re-use same container class for positioning
                    variants={slideScreenVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <SubMenuDetail title={detailTitle} onBack={goBack} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="menu__bottom-cta">
              <div className="menu__bg-cta" />
              <button className="button button--cta-end">Abrir conta grátis</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
