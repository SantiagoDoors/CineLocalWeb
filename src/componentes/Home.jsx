import { Pelicula } from "./Pelicula"
import { useEffect, useState } from "react";
import "./App.css";
import { StarRating} from "./Estrellas"

const Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a93a3ea88a4862bd2cf40ff121654c19&page=1"
const buscarApi = "https://api.themoviedb.org/3/search/movie?&api_key=a93a3ea88a4862bd2cf40ff121654c19&query="



export function Home() {

  const [rating, setRating] = useState(0)
  const [peliculas, setPeliculas] = useState([])
  const [buscado, setBuscado] = useState("")

  useEffect( ()=>{  
          let url = Api 
          if (rating !== 0){
            url += `&vote_average.gte=${rating * 2 - 2}&vote_average.lte=${rating * 2}`;
          }
          pedirApi(url)
        },[rating])

    const pedirApi = (url) =>{
      fetch(url)
      .then((res) => res.json())
      .then((data) => {setPeliculas(data.results)
      })
    }


    const handleOnSubmit = (e) => {
      e.preventDefault()
          if(buscado){
            pedirApi(buscarApi+buscado)
            setBuscado("")
        }
      }

    const handleOnChange = (e) => {
      setBuscado(e.target.value)
    }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit} className="header_web">
          <h1> Cine Local Web </h1>
          <StarRating rating={rating} setRating={setRating} />
          <input type="search"  placeholder="...Buscar" 
          className="buscar" value={buscado} onChange={handleOnChange}/>
        </form>
      </header>
      <main>
        <div className="peliCard">
          {peliculas.map((pelicula)=> 
          <Pelicula key={pelicula.id} {...pelicula} id={pelicula.id}  />)}
          
        </div>
      </main>
    </>
  );
}
