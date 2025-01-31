// Importações necessárias
import React from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

// Componente Header para navegação e busca
const Header = () => {
    return (
        // Navegação principal
        <nav className="header__navigation">
            {/* Botões de navegação */}
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>

            {/* Barra de busca */}
            <div className="header__search">
                <img src={search} alt="Buscar" />
                <input
                    id="search-input"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                />
            </div>

            {/* Área de login */}
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

// Exportação do componente
export default Header;