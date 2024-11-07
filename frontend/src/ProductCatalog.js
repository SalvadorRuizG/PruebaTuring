import React, { useState, useEffect } from 'react';
import styles from './styles/ProductCatalog.module.css';  // Usar styles para importar el archivo CSS

const ProductCatalog = ({ onSelectProduct }) => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);  // Estado para controlar el desplazamiento
    const [selectedProduct, setSelectedProduct] = useState(null);  // Estado para el producto seleccionado


    useEffect(() => {
        fetch('/api/Productos')
            .then(response => response.json())
            .then(data => setProductos(data));
    }, []);

    const productsPerPage = 3;
    const startIndex = currentPage * productsPerPage;
    const paginatedProducts = productos.slice(startIndex, startIndex + productsPerPage);

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(productos.length / productsPerPage));
        setCurrentPosition(currentPosition - 1);  // Mover hacia la izquierda
    };

    const handlePrevious = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(productos.length / productsPerPage)) % Math.ceil(productos.length / productsPerPage));
        setCurrentPosition(currentPosition + 1);  // Mover hacia la derecha
    };


    // Asignar imágenes basadas en ID o nombre
    const getImageForProduct = (producto) => {
        switch (producto.id) {
            case 1:
                return '/images/background1.jpg';
            case 2:
                return '/images/background2.jpg';
            case 3:
                return '/images/background3.jpg';
            default:
                return '/images/background4.jpg'; // Imagen predeterminada
        }
    };

    const handleProductClick = (producto) => {
        setSelectedProduct(producto.id);  // Establece el producto seleccionado
        onSelectProduct(producto);
    };

    return (
        <div className={styles.productCatalog}>
            <h1 className={styles.title}>Esto es lo que ofrecemos</h1>
            <div className={styles.productList}>
                {paginatedProducts.map((producto) => (
                    <div
                        key={producto.id}
                        className={styles.productItem}
                        onClick={() => handleProductClick(producto)}
                    >
                        <div
                            className={styles.productBackground}
                            style={{
                                backgroundImage: `url(${getImageForProduct(producto)})`,
                            }}
                        ></div>
                        <div className={styles.productInfo}>
                            {producto.nombre}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.carouselControls}>
                <button onClick={handlePrevious}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ProductCatalog;




