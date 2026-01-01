import React from 'react';
import PageLayout from './PageLayout'; // Importamos a moldura

const HomePage = () => {
  return (
    <PageLayout>
      {/* Aqui dentro é o "children" que vai para o meio da tela */}
      <div className="home-content">
        <h1>Bem-vindo à React Store</h1>
        <p>Esta é a página inicial.</p>
      </div>
    </PageLayout>
  );
}

export default HomePage;