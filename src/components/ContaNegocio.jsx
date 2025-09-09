import React, { useRef, useEffect } from 'react';
import './ContaNegocio.css';
import accountNegocio from '/src/assets/images/account-negocio1.png';
import backIcon from '/src/assets/images/back-icon.svg';
import ButtonLink from './ButtonLink';

const ContaNegocio = ({ onBack, onSelectItem, onScrollChange }) => {
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
    <div className="conta-negocio" ref={scrollRef}>
      <div className="conta-negocio__header">
        <button onClick={onBack} className="conta-negocio__back-button">
          <img src={backIcon} alt="Volver" className="conta-negocio__back-icon" />
        </button>
        <h1 className="conta-negocio__title">Conta Negocio</h1>
      </div>
      <div className="conta-negocio__container">
        <div className="conta-negocio__account">
          <div className="conta-negocio__account-image" style={{ backgroundImage: `url(${accountNegocio})` }} />
          <div className="conta-negocio__account-cta-container">
            <ButtonLink text="Conhecer Conta Negocio" />
          </div>
        </div>
        <div className="conta-negocio__list">
          {/* Section 1 */}
          <div className="conta-negocio__list-item">
            <h2 className="conta-negocio__list-title">Soluções de vendas</h2>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Maquininhas point')}>
              <p className="conta-negocio__product-title">Maquininhas point</p>
            </div>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Point Tap')}>
              <p className="conta-negocio__product-title">Point Tap</p>
            </div>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Tap to Pay no iPhone')}>
              <p className="conta-negocio__product-title">Tap to Pay no iPhone</p>
            </div>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Link de pagamento')}>
              <p className="conta-negocio__product-title">Link de pagamento</p>
            </div>
          </div>
          {/* Section 2 */}
          <div className="conta-negocio__list-item">
            <h2 className="conta-negocio__list-title">Serviços financieros</h2>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Cartão de crédito')}>
              <p className="conta-negocio__product-title">Cartão de crédito</p>
            </div>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Empréstimos')}>
              <p className="conta-negocio__product-title">Empréstimos</p>
            </div>
          </div>
          {/* Section 3 */}
          <div className="conta-negocio__list-item">
            <h2 className="conta-negocio__list-title">Benefícios e PARCEIROS</h2>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Mercado Livre Negócios')}>
              <p className="conta-negocio__product-title">Mercado Livre Negócios</p>
            </div>
            <div className="conta-negocio__product" onClick={() => onSelectItem('Ser revendedor Point')}>
              <p className="conta-negocio__product-title">Ser revendedor Point</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContaNegocio;
