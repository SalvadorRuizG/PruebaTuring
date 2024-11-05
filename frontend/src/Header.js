import React from 'react';
import styles from './styles/Header.module.css';
import logo from './assets/logo.png'; // Asegúrate de tener una imagen de logo

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <img src={logo} alt="Company Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Secciones</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.banner}>
                <div className={styles.overlay}>
                    <h1>Turing</h1>
                    <p>Una breve descripción de la empresa</p>
                </div>
            </div>
        </header>
    );
};

export default Header;

