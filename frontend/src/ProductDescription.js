import React from 'react';

const ProductDescription = ({ producto }) => {
    if (!producto) return <div>Selecciona un producto para ver los detalles</div>;

    return (
        <div className="product-description">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
        </div>
    );
};

export default ProductDescription;

