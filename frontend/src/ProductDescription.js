import React from 'react';
import './App.module.css'; // Asegúrate de agregar tus estilos

const ProductDescription = ({ product }) => {
    if (!product) return <div>Select a product to see the details</div>;

    return (
        <div className="product-description">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDescription;
