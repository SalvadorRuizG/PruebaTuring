import React, { useEffect, useState } from 'react';

const WeatherComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('/api/example'); // Ajusta la ruta según tu endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            {error && <p>Error: {error.message}</p>}
            <ul>
                {data.map((forecast, index) => (
                    <li key={index}>
                        {forecast.date}: {forecast.temperatureC}°C - {forecast.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherComponent;
