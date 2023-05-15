import { useState } from "react";
import { useForm } from "../hooks/useForm"


export const ComicSearch = ({onNewComic}) => {

    // Inicializamos el customHook useForm con los valores que vamos a necesitar para los input
    const {comicName, onInputChange, onResetForm,} = useForm({
        comicName:''
    }); 

    // Creamos una funcion para cuando se haya enviado el formulario
    const onSubmit = (event) =>{

        event.preventDefault();

        // if(comicName.trim().length <=1) return;

        onNewComic(comicName);
        onResetForm()
    }
    

  return (
    <>
        <form  onSubmit={ onSubmit }>
            <input 
                type="text"
                name="comicName"
                value={comicName}
                placeholder="Escribe el nombre del comic"
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
