import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { ComicSearch } from './ComicSearch';
// import { useForm } from '../hooks/useForm'

export const App = () => {

  // const { onInputChange, onResetForm,} = useForm({});

  const [searchComic, setsearchComic] = useState('');


  const onAddComic = ( newComic ) =>{

    // if(searchComic.includes(newComic)) return

    setsearchComic(newComic);

  }


  return (
    <>
        <h1>Parte Principal</h1>
        {/* AQUI SE HARA LA BUSQUEDA */}
        <ComicSearch onNewComic={onAddComic}/>

        <h1>Aqui estara la lista de los elementos</h1>
        <ItemList comicSearch={searchComic}/>


        
    
    </>
    
  )
}
