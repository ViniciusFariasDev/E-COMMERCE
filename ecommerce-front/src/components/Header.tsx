import { FaWhatsapp } from 'react-icons/fa';

function Header() {
  return (
    <header style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  height: '80px',
  background: '#dcdcdc',
  color: '#222',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 3rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
}}>

      <h1 style={{
        fontSize: '2.2rem',
        fontWeight: 600,
        letterSpacing: '1px',
        fontFamily: `'Playfair Display', serif`,
        color: '#2e2e2e'
      }}>
        F<span style={{ color: '#8b6b3f' }}>ormalWear</span>
      </h1>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {['Home', 'Produtos', 'Contato'].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              color: '#444',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1.2rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#444')}
          >
            {item}
          </a>
        ))}

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25d366',
            borderRadius: '50%',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaWhatsapp color="#fff" size={22} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
