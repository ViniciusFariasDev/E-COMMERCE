import { useEffect, useRef, useState } from 'react';
import { FaTags, FaShippingFast } from 'react-icons/fa';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';


const images = [banner1, banner2, banner3, banner4];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const totalSlides = imageCount + 1; // incluindo cópia do primeiro
    if (currentIndex === totalSlides) {
      // depois da transição para o clone, reseta sem animação
      transitionRef.current = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = 'translateX(0)';
        }
        setCurrentIndex(0);
      }, 800); // espera a transição terminar
    } else {
      if (containerRef.current) {
        containerRef.current.style.transition = 'transform 0.8s ease-in-out';
        containerRef.current.style.transform = `translateX(-${(100 / (imageCount + 1)) * currentIndex}%)`;
      }
    }

    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [currentIndex, imageCount]);

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        gap: '1rem',
        backgroundColor: '#f3f3f3',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Lado esquerdo */}
      <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
        <div
          style={{
            background: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 0 8px rgba(0,0,0,0.1)',
            display: 'inline-block',
          }}
        >
          <FaTags size={24} style={{ marginRight: '8px', color: '#111' }} />
          <span style={{ fontWeight: 'bold' }}>Ofertas Exclusivas</span>
        </div>
      </div>

      {/* Carrossel central */}
      <div
        style={{
          flex: '2.5',
          height: '400px',
          overflow: 'hidden',
          borderRadius: '12px',
          position: 'relative',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            width: `${(imageCount + 1) * 100}%`, // +1 para cópia do primeiro
          }}
        >
          {images.concat(images[0]).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`banner-${index}`}
              style={{
                width: `${100 / (imageCount + 1)}%`,
                height: '400px',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Lado direito */}
      <div style={{ flex: '1', textAlign: 'left', paddingLeft: '1rem' }}>
        <div
          style={{
            background: '#fff',
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 0 8px rgba(0,0,0,0.1)',
            display: 'inline-block',
          }}
        >
          <FaShippingFast size={24} style={{ marginRight: '8px', color: '#111' }} />
          <span style={{ fontWeight: 'bold' }}>Entrega Rápida</span>
        </div>
      </div>
    </section>
  );
}
