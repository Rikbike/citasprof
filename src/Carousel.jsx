import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from './abogados.jpg';
import logo1 from './mecanico.jpg';
import logo2 from './medicos.jpg';
import './Carousel.css'; // Asegúrate de importar tu archivo CSS

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="image-container">
                    <img src={logo} alt="abogados" />
                </div>
                <Carousel.Caption>
                    <h3>abogados</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-container">
                    <img src={logo1} alt="mecanicos" className="small-image" /> {/* Agregar clase específica */}
                </div>
                <Carousel.Caption>
                    <h3>mecanicos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-container">
                    <img src={logo2} alt="medicos" />
                </div>
                <Carousel.Caption>
                    <h3>medicos</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;