import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';
import item1 from '/src/assets/images/item-1.png';
import logo from '/src/assets/images/logo.svg';
import logoWhite from '/src/assets/images/logo-white.svg';
import chevronRightNew from '/src/assets/images/chevron-right-new.svg';
import padlockClosed from '/src/assets/images/padlock-closed.svg';
import helper from '/src/assets/images/helper.svg';
import LottieHamburgerIcon from './LottieHamburgerIcon';

const mobileMenuVariants = {
  hidden: {
    y: -24,
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: 'easeInOut'
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 42,
    }
  }
};

const menuContainerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const staggerContainerVariants = {
  visible: {
    transition: {
      delayChildren: 2, // 2-second delay before children animate
      staggerChildren: 0.1,
    }
  },
};

const scaleInItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <header className={`header ${isOpen ? 'header--white' : 'header--yellow'}`}>
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
      </header>
      
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="menu__initial-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu__item-1" style={{ backgroundImage: `url(${item1})` }}></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu__mobile"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Slower and smoother ease
          >
            <motion.div
              className="menu__page-container"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div className="menu__content" variants={staggerContainerVariants}>
                <motion.h1 className="menu__title" variants={scaleInItemVariants}>
                  A conta completa <br />
                  do Mercado Livre
                </motion.h1>
                <motion.div className="menu__menu-all" variants={staggerContainerVariants}>
                  <motion.div variants={scaleInItemVariants}>
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
                            <img src={chevronRightNew} alt="Chevron Right" className="menu-item__arrow" />
                          </div>
                        </div>
                        <p className="menu-item__description">Soluções de venda, gestão e crédito</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={scaleInItemVariants}>
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
              <motion.div className="menu__bottom-cta" variants={scaleInItemVariants}>
                <div className="menu__bg-cta"></div>
                <button className="button button--cta-end">Abrir conta grátis</button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
