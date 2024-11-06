import React from 'react';
import styles from './styles/TeamSection.module.css'; // Archivo CSS específico para esta sección
import teamImage from './assets/team.png'; // Imagen de ejemplo

const TeamSection = () => {
    return (
        <section className={styles.teamSection}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h2>Conoce a Nuestro Equipo</h2>
                    <p>Un equipo dedicado a innovar en inteligencia artificial.</p>
                    <p>Nuestros expertos trabajan en colaboración para ofrecer soluciones de vanguardia.</p>
                    <button className={styles.button}>Más sobre nosotros</button>
                </div>
                <div className={styles.imageContainer}>
                    <img src={teamImage} alt="Nuestro equipo" />
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

