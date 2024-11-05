import React, { useState } from 'react';
import Header from './Header';
import ProductCatalog from './ProductCatalog';
import ProductDescription from './ProductDescription';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import WeatherComponent from './WeatherComponent';
import Footer from './Footer';
import './App.module.css'; // Asegúrate de agregar tus estilos

const App = () => {
    // const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <WeatherComponent />
            </div>
            <TeamSection />
            <PricingSection />
            <Footer />
        </div>
    );
};

export default App;
