import React from 'react';
import './App.module.css'; // Asegúrate de agregar tus estilos

const TeamSection = () => {
    return (
        <section className="team-section">
            <h2>Conoce a Nuestro Equipo</h2>
            <p>Un equipo dedicado a innovar en inteligencia artificial.</p>
            <div className="team-members">
                <div className="member">Miembro 1</div>
                <div className="member">Miembro 2</div>
                <div className="member">Miembro 3</div>
            </div>
        </section>
    );
};

export default TeamSection;
