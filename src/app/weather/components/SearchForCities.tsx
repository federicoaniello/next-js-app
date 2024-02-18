"use client"
import { useState } from "react";

const SearchForCities = () => {
    const [cityName, setCityName] = useState('');

    const searchForCities = async (cityNameToSearch: string) => {
        // Costruisce l'URL per la chiamata API
        const url = new URL('/api/weather', window.location.origin);
        const params = new URLSearchParams({ city: cityNameToSearch });
        url.search = encodeURI(params.toString());

        try {
            // Esegue la chiamata API
            const res = await fetch(url.toString(),{method:'POST',body:JSON.stringify({city:cityName})});
            const data = await res.json();

            // Gestisce la risposta qui, ad esempio aggiornando lo stato del componente
            console.log(data);
        } catch (error) {
            // Gestisce eventuali errori qui
            console.error("Errore durante la ricerca della città:", error);
        }
    };

    return (
        <>
            <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Inserisci il nome della città"
            />
            <button onClick={() => searchForCities(cityName)}>Cerca</button>
        </>
    );
};

export default SearchForCities;
