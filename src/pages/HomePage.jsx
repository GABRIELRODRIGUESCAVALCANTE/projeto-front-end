import React from 'react';
import PageLayout from './PageLayout';
// REMOVI O IMPORT DO GALLERY AQUI PARA NÃO DAR ERRO
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import ProductListing from '../components/ProductListing';

const HomePage = () => {
  
  // Lista de dados (simulando o que viria de uma API)
  const products = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true",
      price: 200,
      // Esse aqui não tem desconto, para testarmos a lógica
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true",
      price: 200,
      priceDiscount: 149.9
    },
  ];

  return (
    <PageLayout>
      
      <div className="home-content-container" style={{ padding: '40px 100px' }}>
        
        {/* Seção de Produtos em Alta */}
        <Section 
            title="Produtos em alta" 
            titleAlign="left" 
            link={{ text: "Ver todos", href: "/produtos" }}
        >
            {/* AGORA USAMOS A LISTAGEM AUTOMÁTICA AQUI */}
            <ProductListing products={products} />
            
        </Section>

      </div>

    </PageLayout>
  );
}

export default HomePage;