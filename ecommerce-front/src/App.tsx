import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      {/* Garante que o conteúdo não fique atrás do Header */}
      <div style={{ marginTop: '80px' }}>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
