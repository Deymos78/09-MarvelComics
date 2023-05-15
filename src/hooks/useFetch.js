import { useEffect, useState } from "react"
import { helperFetch } from "../helpers/helperFetch";


// Aqui es donde se realizara el hook para la peticion a la API
export const useFetch = (comicSearch) => {

  // console.log('Estamos en la parte del fetch')
  // console.log(comicSearch);
  const [comicsState, setComicsState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Tenemos que hacer dos cosas , la primera es la peticion fetch y la segunda es evitar que se realize la peticion a cada momento

  // AQUI SE REALIZARA LA PETICION
  // COmo es una peticion a una api, la funcion tienne que ser asincrona
  const getComics= async() =>{
    const comics = await helperFetch(comicSearch);

    setComicsState(comics);
    setIsLoading(false);

  }

  // AQUI SE EVITAR EL RENDERIZADO A CADA MOMENTO, para ello usaremos el useEffect

  useEffect(() => {

    getComics();

  }, [comicSearch])

  return {
    comicsState,
    isLoading
  }
}
