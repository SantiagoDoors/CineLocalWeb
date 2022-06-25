import React from "react";
import { Link } from "react-router-dom"
import "./App.css"

const imgApi = "http://image.tmdb.org/t/p/w1280"

export function Pelicula({title, vote_average,id, poster_path}) {
    return (
    <div className="card">
        <img src={ imgApi + poster_path} alt={title} />
        <div className="info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
        <button className="masInfo"><Link to={"/pelicula/"+id}>+info</Link></button>
        </div>
        
    </div>
    )
}
