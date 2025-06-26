import terno from '../assets/terno-slim-azul.jpg';
import camisa from '../assets/camisa-social-branca.jpg';
import blazer from '../assets/blazer-cinza-classico.jpg';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';

const mockProducts = [
  {
    name: 'Terno Slim Azul Marinho',
    price: 'R$ 899,00',
    image: terno
  },
  {
    name: 'Camisa Social Branca',
    price: 'R$ 199,00',
    image: camisa
  },
  {
    name: 'Blazer Cinza Clássico',
    price: 'R$ 749,00',
    image: blazer
  }
];

function Home() {
  return (
    <>
      <HeroBanner />

      {/* SEÇÃO ESTILO / ELEGÂNCIA */}
      <section style={{
        backgroundColor: '#f8f8f8',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#222',
          fontWeight: 'bold'
        }}>
          Estilo. Elegância. Confiança.
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#555',
          marginBottom: '2rem'
        }}>
          A coleção perfeita para o homem moderno e sofisticado.
        </p>
        <button style={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111'}
        >
          Ver Coleção
        </button>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section style={{ padding: '2rem 4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Destaques</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {mockProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
