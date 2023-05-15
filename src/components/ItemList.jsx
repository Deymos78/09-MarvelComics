import { useFetch } from "../hooks/useFetch"
import { Item } from "./Item"
import PropTypes from "prop-types";

export const ItemList = ({comicSearch}) => {

 
  
  console.log('Ahora leeremos los datos ');
  console.log(comicSearch);
  const {isLoading, comicsState} = useFetch(comicSearch);
  

  
  return (
    <>

      <h2>Este sera el Item</h2>
      
      {
          isLoading && (<h2>Cargando.....</h2>)
      }
      <div>

        {
          !isLoading &&
          (comicsState.map( ( comic ) =>(
            <Item
              key={comic.id}
              {...comic}
            />
          )))
        }

      </div>
    </>
  )
}




