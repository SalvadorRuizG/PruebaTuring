import React, { useState } from 'react';
import Header from './Header';
import ProductCatalog from './ProductCatalog';
import ProductDescription from './ProductDescription';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import './App.module.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('Inicio');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="App">
            <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
            <div className="main-content">
                <div className="catalog-description-container">
                    <ProductCatalog onSelectProduct={setSelectedProduct} />
                    <ProductDescription producto={selectedProduct} />
                </div>
            </div>
            <TeamSection />
            <PricingSection />
            <Footer />
        </div>
    );
};

export default App;


