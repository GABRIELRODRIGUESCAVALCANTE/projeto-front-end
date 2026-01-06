import React from 'react';
import './ProductViewPage.css';
import PageLayout from './PageLayout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  
  // Imagens de exemplo para a Galeria do Produto
  const galleryImages = [
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-2.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-3.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-4.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-5.jpeg" },
  ];

  // Produtos Recomendados (4 itens)
  const relatedProducts = [
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.png?raw=true", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <PageLayout>
      <div className="product-view-container">
        
        {/* --- PARTE SUPERIOR: DETALHES DO PRODUTO --- */}
        <div className="product-details-wrapper">
            
            {/* Galeria à Esquerda (Requisito 7.1) */}
            <Gallery 
                width="700px" 
                height="570px" 
                radius="4px" 
                showThumbs // Exibe miniaturas embaixo
                images={galleryImages} 
            />

            {/* BuyBox à Direita (Requisito 7.3) */}
            <BuyBox
                name="Tênis Nike Revolution 6 Next Nature Masculino"
                reference="38416711"
                stars={4.7}
                rating={90}
                price={219.00}
                priceDiscount={219.00}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            >
                {/* Requisito 7.2: Opções de Tamanho */}
                <p style={{color: '#8F8F8F', fontWeight:'bold', fontSize:'14px', margin:'20px 0 5px 0'}}>Tamanho</p>
                <ProductOptions 
                    options={["39", "40", "41", "42", "43"]}
                    radius="4px"
                    shape="square"
                    type="text"
                />

                {/* Requisito 7.2: Opções de Cor */}
                <p style={{color: '#8F8F8F', fontWeight:'bold', fontSize:'14px', margin:'20px 0 5px 0'}}>Cor</p>
                <ProductOptions 
                    options={["#6FEEFF", "#FF6969", "#5D5D5D", "#6D70B7"]}
                    radius="4px" /* Esse valor é ignorado pq shape é circle, mas passamos pra seguir padrão */
                    shape="circle"
                    type="color"
                />
            </BuyBox>

        </div>

        {/* --- PARTE INFERIOR: PRODUTOS RECOMENDADOS (Requisito 7.4) --- */}
        <Section 
            title="Produtos recomendados" 
            titleAlign="left" 
            link={{text:"Ver todos", href:"/produtos"}}
        >
            <ProductListing products={relatedProducts} />
        </Section>

      </div>
    </PageLayout>
  );
}

export default ProductViewPage;