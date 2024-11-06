import React from 'react';
import styles from './styles/PricingSection.module.css'; // Archivo CSS específico para esta sección

const PricingSection = () => {
    return (
        <section className={styles.pricingSection}>
            <div className={styles.featuresContainer}>
                <div className={styles.featureBox}>
                    <h3>Nuestra Alianzas Estratégicas</h3>
                    <ul>
                        <li>Google</li>
                        <li>Okta</li>
                        <li>Amazon Web Services</li>
                        <li>Tableau</li>
                        <li>Snowflake</li>
                    </ul>
                </div>
                <div className={`${styles.featureBox} ${styles.centerBox}`}>
                    <h3>Nuestras Metodologías</h3>
                    <ul>
                        <li>Scrum.org</li>
                        <li>Business Intelligence</li>
                        <li>Tableau Blueprint</li>
                        <li>Project Management Institute</li>
                    </ul>
                </div>
                <div className={styles.featureBox}>
                    <h3>Clientes</h3>
                    <ul>
                        <li>Red Hat</li>
                        <li>Verizon</li>
                        <li>Whole Foods Market</li>
                        <li>Mondelez International</li>
                        <li>JPMorgan Chase</li>
                        <li>Grupo Petersen</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

