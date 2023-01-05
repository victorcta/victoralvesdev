import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Olá, me chamo</h5>
        <h1>Victor Alves</h1>
        <h5 className="text-light">Desenvolvedor Web Full-stack</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Rolar para baixo
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
