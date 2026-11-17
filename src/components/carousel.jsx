import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import decoration_scandinave from '../assets/decoration_scandinave.jpeg';
import Salon_artisanat from '../assets/Salon_artisanat.jpeg';
import salon_moderne from '../assets/salon_moderne.jpeg';
import salon1 from '../assets/salon1.jpg'
import './carousel.css';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images du carrousel 
  const slides = [
    {
      id: 1,
      image: salon_moderne,
      title: 'Collection Moderne',
      subtitle: 'Découvrez nos nouveaux meubles design',
      buttonText: 'Voir la collection'
    },
    {
      id: 2,
      image: decoration_scandinave,
      title: 'Décoration Scandinave',
      subtitle: 'Minimalisme et élégance pour votre intérieur',
      buttonText: 'Explorer'
    },
    {
      id: 3,
      image: Salon_artisanat,
      title: 'Mobilier Artisanal',
      subtitle: 'Pièces uniques fabriquées avec passion',
      buttonText: 'Découvrir'
    }
  ];

  // Slide suivante
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Slide précédente
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play du carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Navigation par points
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      {/* Container des slides */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Image de fond */}
            <div 
              className="slide-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
            </div>

            {/* Contenu */}
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <button className="slide-button">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button 
        className="carousel-btn carousel-btn-prev" 
        onClick={prevSlide}
        aria-label="Slide précédente"
      >
        <ChevronLeft className="btn-icon" />
      </button>
      
      <button 
        className="carousel-btn carousel-btn-next" 
        onClick={nextSlide}
        aria-label="Slide suivante"
      >
        <ChevronRight className="btn-icon" />
      </button>

      {/* Indicateurs (points) */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller à la slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}