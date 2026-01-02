import React, { useState } from 'react'; // 1. Importamos o useState
import Logo from './Logo';
import './Header.css';
import { useNavigate, Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm}`);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <header className="header-container">
      
      {/* === LINHA DE CIMA === */}
      <div className="header-top">
        <div className="logo-container">
            <Logo />
            <div className="nome-loja">React Store</div>
        </div>

        <div className="search-bar">
            <input 
              type="text" 
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span> 
        </div>

        <div className="user-actions">
            <Link to="/cadastro" className="link-cadastro">Cadastre-se</Link>
            <Link to="/login" className="btn-entrar">Entrar</Link>
            <div className="cart-icon">🛒</div>
        </div>
      </div>

      {/* === LINHA DE BAIXO (MENU INTELIGENTE) === */}
      <div className="header-nav">
        <nav>
            <ul>
                <li>
                    {/* O NavLink verifica se está ativo e muda a classe sozinho */}
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/produtos" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categorias" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/meus-pedidos" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Meus Pedidos
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header;