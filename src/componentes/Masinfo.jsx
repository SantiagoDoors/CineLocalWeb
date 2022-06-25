import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Info.css"

const imgApi = "http://image.tmdb.org/t/p/w1280/"
const detalle = "https://api.themoviedb.org/3/movie/"
const auth = "?api_key=a93a3ea88a4862bd2cf40ff121654c19"




export function MasInfo(){

  const [info, setInfo] = useState({})
  const {id} = useParams()
  

  useEffect( ()=>{ respuesta(id)},
  )

  const respuesta = (id) =>{
    fetch(detalle+id+auth)
    .then((res) => res.json())
    .then((data) => setInfo(data)
   ) 
  }
  return (
    <div className="general"><>
        <div><h3 className="titulo">{info.title}</h3></div>
        <img className="img1" src={ imgApi + info.poster_path} alt={info.title} />
        <div className="info-secundaria"><p>{info.overview}</p> 
        <span className="p1">Lanzamiento: {info.release_date} Valoracion: {info.vote_average}</span>
        
        </div>
        </>
  </div>
  )
}