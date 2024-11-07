import React from 'react';
import styles from './styles/ProductDescription.module.css';  // Usar styles para importar el archivo CSS
import imgName from './assets/nombre.png';
import imgDesc from './assets/desc.png';
import imgPrice from './assets/price.png';

const ProductDescription = ({ producto }) => {
    if (!producto) return <div style={{
        color: '#112e40',
        fontSize: '30px',
        marginRight: '200px',
        fontFamily: 'Poppins, sans-serif'
    }}>Selecciona un producto para ver los detalles</div>;

    return (
        <div className={styles.productDescription}>
            <div className={styles.productInfoContainer}>
                {/* Imagen a la izquierda y texto a la derecha */}
                <div className={styles.productText}>
                    <div className={styles.textWithImage}>
                        <img src={imgName} alt="Nombre del producto" className={styles.iconImage} />
                        <h2>{producto.nombre}</h2>
                    </div>
                    <br></br>
                    <div className={styles.textWithImage}>
                        <img src={imgDesc} alt="Descripción del producto" className={styles.iconImage} />
                        <p>{producto.descripcion}</p>
                    </div>
                    <br></br>
                    <div className={styles.textWithImage}>
                        <img src={imgPrice} alt="Precio del producto" className={styles.iconImage} />
                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                    </div>
                    <br></br><br></br>
                    <button className={styles.button}>Ver más</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;



