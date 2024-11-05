import React from 'react';
import './App.module.css'; // Asegúrate de agregar tus estilos

const PricingSection = () => {
    return (
        <section className="pricing-section">
            <h2>Nuestros Paquetes de Precios</h2>
            <div className="pricing-packages">
                <div className="package">Paquete 1: $10</div>
                <div className="package">Paquete 2: $20</div>
                <div className="package">Paquete 3: $30</div>
            </div>
        </section>
    );
};

export default PricingSection;
