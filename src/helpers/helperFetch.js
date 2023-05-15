

// Aqui tendremos que realziar la peticion a la APi y recuperar los datos 
export const helperFetch = async(comicSearch) => {

  // console.log('Estamos en la parte del Fetch');
  // console.log(comicSearch);
  // const url =`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171&title=${comicSearch}&limit=5`
  let url='';

  if(comicSearch==''){

    url= `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171&limit=5`
  }else{
    url =`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=38d90848f70dbf7641a741a055318a5d&hash=5ba0110e6c23a4ae92f98927cdf69171&title=${comicSearch}&limit=5`
  }
  // En una peticion fetch se realiza una peticion asincrona y se devuelve una respuesta, por eso se coloca un await ya que es aincrona
  const resp =  await fetch(url);
  // console.log(resp);

  // Colocamos un await ya que el metodo json() es un metodo asincrono
  const { data } = await resp.json();
  // console.log(data);

  const {results} = data;

  // Ahora tenemos que montar un objeto para devolverlo, puesto que ya lo hemos convertido en un objeto javscript solo tenemos que montarlo


  const comics = results.map(results => ({
 
    id: results.id,
    comicName: results.title,
    image: results.thumbnail.path +'.'+ results.thumbnail.extension

  }));
  
  return comics
}
