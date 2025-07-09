import React, { useRef } from 'react';

import terno from '../assets/terno-slim-azul.jpg';
import camisa from '../assets/camisa-social-branca.jpg';
import blazer from '../assets/blazer-cinza-classico.jpg';
import sapatoMarrom from '../assets/sapato-social-marrom.jpg';
import sapatoPreto from '../assets/sapato-social-preto.jpg';
import sapatoEsportivo from '../assets/sapato-social-esportivo.jpg';

import relogioCinza from '../assets/relogio-cinza.jpg';
import relogioAllBlack from '../assets/relogio-allblack.jpg';
import smartwatch from '../assets/smartwatch.jpg';

import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  { name: 'Terno Slim Azul Marinho', price: 'R$ 899,00', image: terno },
  { name: 'Camisa Social Branca', price: 'R$ 199,00', image: camisa },
  { name: 'Blazer Cinza Clássico', price: 'R$ 749,00', image: blazer },
];

const mockShoes = [
  { name: 'Sapato Social Marrom', price: 'R$ 349,00', image: sapatoMarrom },
  { name: 'Sapato Social Preto', price: 'R$ 379,00', image: sapatoPreto },
  { name: 'Sapato Social Esportivo', price: 'R$ 329,00', image: sapatoEsportivo },
];

const mockWatches = [
  { name: 'Relógio Hilfiger', price: 'R$ 499,00', image: relogioCinza },
  { name: 'Relógio All Black', price: 'R$ 599,00', image: relogioAllBlack },
  { name: 'Relógio Aknight', price: 'R$ 699,00', image: smartwatch },
];

// Componente genérico de carrossel para os produtos
function ProductCarousel({
  products,
}: {
  products: { name: string; price: string; image: string }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -270, behavior: 'smooth' });
    }
  }

  function scrollRight() {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 270, behavior: 'smooth' });
    }
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        position: 'relative',
        padding: '1rem 0',
      }}
    >
      {/* Botão seta esquerda */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll Left"
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#bfa36f',
          border: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          cursor: 'pointer',
          zIndex: 10,
          color: '#fff',
          fontSize: '1.5rem',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ‹
      </button>

      {/* Container horizontal scroll */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          gap: '1rem',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '0 2.5rem', // espaço para as setas laterais
          scrollbarWidth: 'none' /* Firefox */,
          msOverflowStyle: 'none' /* IE 10+ */,
        }}
        className="no-scrollbar"
      >
        {products.map((p, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: 250 }}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      {/* Botão seta direita */}
      <button
        onClick={scrollRight}
        aria-label="Scroll Right"
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#bfa36f',
          border: 'none',
          borderRadius: '50%',
          width: 36,
          height: 36,
          cursor: 'pointer',
          zIndex: 10,
          color: '#fff',
          fontSize: '1.5rem',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ›
      </button>
    </div>
  );
}

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />

      {/* SEÇÃO ESTILO / ELEGÂNCIA */}
      <section
        style={{
          backgroundColor: '#f8f8f8',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#222',
            fontWeight: 'bold',
          }}
        >
          Estilo. Elegância. Confiança.
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#555',
            marginBottom: '2rem',
          }}
        >
          A coleção perfeita para o homem moderno e sofisticado.
        </p>
        <button
          style={{
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#111')}
        >
          Ver Coleção
        </button>
      </section>

      {/* Destaques */}
      <section style={{ padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Destaques</h2>
        <ProductCarousel products={mockProducts} />
      </section>

      {/* Sapatos Sociais */}
      <section style={{ padding: '2rem 0' }}>
        <ProductCarousel products={mockShoes} />
      </section>

      {/* Relógios Personalizados */}
      <section style={{ padding: '2rem 0' }}>
        <ProductCarousel products={mockWatches} />
      </section>
    </>
  );
};

export default Home;
