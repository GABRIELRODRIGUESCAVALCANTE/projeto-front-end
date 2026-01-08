import React, { useState } from 'react'; 
import Logo from './Logo';
import './Header.css';
import { useNavigate, Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // 1. NOVO: Estado para controlar o menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${searchTerm}`);
      setMenuOpen(false); // Fecha o menu se pesquisar algo
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
        
        {/* 2. NOVO: Botão Hambúrguer (Só vai aparecer no Mobile via CSS) */}
        <button 
            className="menu-hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
        >
            {/* Ícone das 3 listras (SVG simples) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                <path d="M3 12H21" />
                <path d="M3 6H21" />
                <path d="M3 18H21" />
            </svg>
        </button>

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
           <div className="cart-icon">
            🛒 
            <span className="cart-count">0</span>
        </div>
        </div>
      </div>

      {/* === LINHA DE BAIXO (MENU) === */}
      {/* 3. NOVO: Adicionamos a classe 'open' se o menuOpen for true */}
      <div className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <nav>
            <ul>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setMenuOpen(false)} // Fecha ao clicar
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/produtos" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setMenuOpen(false)}
                    >
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/categorias" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setMenuOpen(false)}
                    >
                        Categorias
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/meus-pedidos" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setMenuOpen(false)}
                    >
                        Meus Pedidos
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className="mobile-actions">
            <hr className="divider" /> {/* Uma linha para separar */}
            
            <Link to="/cadastro" className="mobile-link" onClick={() => setMenuOpen(false)}>
                Cadastre-se
            </Link>
            
            <Link to="/login" className="mobile-btn-entrar" onClick={() => setMenuOpen(false)}>
                Entrar
            </Link>
        </div>
      </div>

    </header>
  );
}

export default Header;