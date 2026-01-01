import React from 'react';
import Logo from './Logo'; // Importando seu componente de Logo existente
import './Header.css'; // Importando o CSS que acabamos de criar

const Header = () => {
  return (
    <header className="header-container">
      
      {/* === LINHA DE CIMA === */}
      <div className="header-top">
        
        {/* 1. Logo */}
        <Logo />

        {/* 2. Barra de Busca */}
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar produto..." />
            <span className="search-icon">🔍</span> {/* Ícone Lupa */}
        </div>

        {/* 3. Ações (Cadastro, Botão Entrar, Carrinho) */}
        <div className="user-actions">
            <a href="/cadastro" className="link-cadastro">Cadastre-se</a>
            
            <button className="btn-entrar">Entrar</button>
            
            <div className="cart-icon">
                🛒 {/* Ícone Carrinho */}
                {/* Aqui poderia ter uma bolinha com o número '2' como na foto */}
            </div>
        </div>
      </div>

      {/* === LINHA DE BAIXO (MENU) === */}
      <div className="header-nav">
        <nav>
            <ul>
                <li>
                    <a href="/" className="nav-link active">Home</a>
                </li>
                <li>
                    <a href="/produtos" className="nav-link">Produtos</a>
                </li>
                <li>
                    <a href="/categorias" className="nav-link">Categorias</a>
                </li>
                <li>
                    <a href="/meus-pedidos" className="nav-link">Meus Pedidos</a>
                </li>
            </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header;