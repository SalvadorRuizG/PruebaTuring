import React from 'react';
import styles from './styles/Footer.module.css'; // Asegúrate de importar el archivo CSS
import facebookImage from './assets/facebook.png'; // Imagen de ejemplo
import linkedinImage from './assets/linkedin.png'; // Imagen de ejemplo
import instagramImage from './assets/instagram.png'; // Imagen de ejemplo

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookImage} alt="Nuestro Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImage} alt="Nuestro Linkedin" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImage} alt="Nuestro Instagram" />
                </a>
            </div>
            <div className={styles.contactInfo}>
                <div>Contacto: <a href="contacto@turing-latam.com">contacto@turing-latam.com</a></div>
                <div>Dirección: Av. Insurgentes Sur 674, Del Valle Norte, Benito Juárez, C.P 03103 Ciudad de México, CDMX Oficina 12 del cuarto piso</div>
                <div>Teléfono: +52 (722) 936-96-65</div>
            </div>
            <div>© 2024 Derechos de Autor</div>
        </footer>
    );
};

export default Footer;

