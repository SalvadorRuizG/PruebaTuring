import React from 'react';
import styles from './styles/Header.module.css';
import logo from './assets/logo.png';

const Header = ({ activeSection, onSectionChange }) => {
    const navItems = [
        { name: 'Inicio', section: 'Inicio' },
        { name: 'Productos', section: 'ProductCatalog' },
        { name: 'Secciones', section: 'TeamSection' },
        { name: 'Contacto', section: 'Footer' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <img src={logo} alt="Company Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    <ul>
                        {navItems.map((item) => (
                            <li
                                key={item.section}
                                className={activeSection === item.section ? styles.active : ''}
                                onClick={() => onSectionChange(item.section)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <div className={styles.overlay}>
                        <h1>Turing - IA</h1>
                        <p>Somos una empresa de analítica e inteligencia de negocios en México con especialistas en Business Analytics.</p>
                        <p>Con más de 15 años de experiencia, ofrecemos soluciones innovadoras en diversas industrias. </p>
                        <p>Contamos con Especialistas en Análisis Descriptivos, Predictivos y Prescriptivos certificados en el desarrollo de Análisis de Datos con KDD.</p>
                        <button className={styles.button}>Más información</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;



