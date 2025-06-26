function Footer() {
  return (
    <footer style={{
      backgroundColor: '#dcdcdc',
      color: '#2e2e2e',
      textAlign: 'center',
      padding: '2rem 1rem',
      marginTop: '4rem',
      fontSize: '1.1rem',
      fontFamily: `'Playfair Display', serif`,
      borderTop: '1px solid #c0c0c0'
    }}>
      © {new Date().getFullYear()} <strong style={{ color: '#8b6b3f' }}>FormalWear</strong>. Todos os direitos reservados.
    </footer>
  );
}

export default Footer;
