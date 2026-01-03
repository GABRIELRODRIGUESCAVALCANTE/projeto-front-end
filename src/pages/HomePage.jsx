import React from 'react';
import PageLayout from './PageLayout';
// REMOVI O IMPORT DO GALLERY AQUI PARA NÃO DAR ERRO
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <PageLayout>
      
      {/* Como não temos o Banner (Gallery), começamos direto pelo conteúdo */}
      <div className="home-content-container" style={{ padding: '40px 100px' }}>
        
        {/* Componente SECTION (Produtos em alta) */}
        <Section 
            title="Produtos em alta" 
            titleAlign="left" 
            link={{ text: "Ver todos", href: "/produtos" }}
        >
            {/* Lista de Produtos (Filhos da Section) */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                
                <ProductCard 
                    image="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true"
                    name="K-Swiss V8 - Masculino"
                    category="Tênis"
                    price="200"
                    priceDiscount={30}
                />

                <ProductCard 
                    image="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true"
                    name="K-Swiss V8 - Masculino"
                    category="Tênis"
                    price="200"
                    priceDiscount={30}
                />
                
                {/* Podes copiar e colar mais ProductCards aqui se quiseres encher a tela */}

            </div>
        </Section>

      </div>

    </PageLayout>
  );
}

export default HomePage;