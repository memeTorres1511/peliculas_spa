import React from "react";
import Pelicula from "./pelicula.jsx";

const Peliculas = () => {
    const peliculas = [
        {
            titulo: "Terminator",
            genero: "Accion",
            director: "James Cameron",
            anio: "1996"
        },
        {
            titulo: "Ratatuille",
            genero: "Animada",
            director: "James Cameron",
            anio: "2000"
        },
        {
            titulo: "Avengers",
            genero: "Accion",
            director: "John Weig",
            anio: "2020"
        }
    ]
    return(
        <>
            <div>
                <h2>Peliculas</h2>
            </div>
            <div>Pelicula contenido</div>
            {peliculas.map((pelicula) => (
                <Pelicula datos = {pelicula}></Pelicula>
            ))}
        </>
    );
};

export default Peliculas;