import React, { useState, useEffect } from 'react';

const ProductCatalog = ({ onSelectProduct }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/api/Productos')
            .then(response => response.json())
            .then(data => setProductos(data));
    }, []);

    return (
        <div className="product-catalog">
            {productos.map(producto => (
                <div key={producto.id} onClick={() => onSelectProduct(producto)}>
                    {producto.nombre}
                </div>
            ))}
        </div>
    );
};

export default ProductCatalog;

