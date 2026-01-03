import React from 'react';
import './Footer.css';
import Logo from './Logo';

// Ícones
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import xIcon from '../assets/x.svg';

/* --- SUB-COMPONENTE (Criado aqui mesmo) --- */
const FooterInformation = ({ title, informations }) => {
  return (
    <div className="footer-info-col">
      <h3 className="footer-col-title">{title}</h3>
      <nav className="footer-nav">
        {informations.map((item, index) => (
          <a key={index} href={item.link} className="footer-link">
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

/* --- COMPONENTE PRINCIPAL --- */
const Footer = () => {
  // DADOS 1: Informações
  const informationList = [
    { text: "Sobre a React Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" },
    { text: "Meus Pedidos", link: "/meus-pedidos" },
  ];

  // DADOS 2: Categorias
  const categoryList = [
    { text: "Camisetas", link: "/produtos?q=camisetas" },
    { text: "Calças", link: "/produtos?q=calcas" },
    { text: "Bonés", link: "/produtos?q=bones" },
    { text: "Headphones", link: "/produtos?q=headphones" },
    { text: "Tênis", link: "/produtos?q=tenis" },
  ];

  // DADOS 3: Contato
  const contactList = [
    { text:( <> "Av. Washington Soares, 3663 - Torre 2 - 4°andar <br /> Edson Queiroz, Fortaleza - CE, 60811-341"</>), link: "/mapa", },
    { text: "(85) 99972-1749", link: "tel:+5585999721749" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* --- LADO ESQUERDO --- */}
        <div className="footer-col-left">
            <div className="logo-white-container">
                <Logo />
                <span className="nome-loja-footer">React Store</span>
            </div>
            <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
                <a href="https://x.com" target="_blank" rel="noreferrer"><img src={xIcon} alt="Twitter" style={{ marginTop: '2px' }} /></a>
            </div>
        </div>

        {/* --- LADO DIREITO (Usando o sub-componente de cima) --- */}
        <div className="footer-col-right">
            <FooterInformation title="Informação" informations={informationList} />
            <FooterInformation title="Categorias" informations={categoryList} />
            <FooterInformation title="Contato" informations={contactList} />
        </div>

      </div>

      <hr />
      <div className="footer-copyright">
        &copy; 2026 React Store
      </div>
    </footer>
  );
}

export default Footer;