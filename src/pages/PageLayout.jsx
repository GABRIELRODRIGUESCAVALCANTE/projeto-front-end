import React from 'react';

// Importações (Essenciais para o código funcionar!)
import Header from '../components/Header';
import Footer from '../components/Footer';

// Definindo o componente de layout (conforme o README)
const PageLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {/* Usamos o 'flex: 1' aqui para empurrar o rodapé para baixo */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Componente do rodapé */}
      <Footer />
      
    </div>
  );
};

export default PageLayout;