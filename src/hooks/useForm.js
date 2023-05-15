import { useState } from "react"

// Crearemos un hoook personalizado para poder manejar el comportamiento de un form
// Por lo general recibiremos un objeto, pero en caso de que lo recibamos lo colocaremos con un valor inicial vacio
export const useForm = (initialFormState={}) => {

    // Creamos un hook state para alamcenar los datos que recibamos para crear el formulario
    const [formState, setFormState] = useState(initialFormState);

    // Ahora Crearemos las acciones que se debe realizar en un formulario

    // Empezamos con el hook para cuando el input cambie

    const onInputChange = ({ target }) => {
        // Tendremos que recuperar los datos 
        // El name es el name de la etiqueta html que hayamos puesto
        const {name, value} = target;

        // Ahora guardaremos los valores recuperados dentro del setForm, le pasaremos un objeto
        // Ademas usaremos el operador spread para descomponer el objeto y poder sobreescribir el name del setForm
        setFormState({
            ...setFormState,
            [name]: value
        });
    }

    // Crearemos una funcion para colocar el estate a un valor inicial, de esta manera limpiaremos el input de cualquier valor
    const onResetForm=() =>{

        setFormState(initialFormState);

    }


    // En estos casos siempre retornaremos un objeto con las referencias de las funciones del hook
    // Tambien descompondremos en este caso el objeto almacenado en el formState
  return {
    ...formState,
    onInputChange,
    onResetForm,
  }
}
