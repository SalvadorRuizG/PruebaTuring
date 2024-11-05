import React, { useEffect, useState } from 'react';
import './ProductCatalog.module.css'; // Asegúrate de agregar tus estilos

const ProductCatalog = ({ onProductSelect }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            // Reemplaza con tu endpoint real
            const response = await fetch('/api/example');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-catalog">
            <h2>Productos</h2>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product" onClick={() => onProductSelect(product)}>
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.shortDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
