type ProductProps = {
  name: string;
  price: string;
  image: string;
};

function ProductCard({ name, price, image }: ProductProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, boxShadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1.03)';
        el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        el.style.borderColor = '#bfa36f';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        el.style.borderColor = '#ddd';
      }}
    >
      <div
        style={{
          width: '100%',
          height: 320,            // altura fixa
          backgroundColor: '#fff',// fundo branco pra evitar transparência estranha
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',  // mostra a imagem inteira, sem corte
          }}
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>{name}</h3>
        <p style={{ color: '#555', fontWeight: 'bold' }}>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
