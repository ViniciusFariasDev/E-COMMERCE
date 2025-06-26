import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function HeroBanner() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem'
      }}
    >
      {[banner1, banner2, banner3].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />
      ))}
    </div>
  );
}

export default HeroBanner;
