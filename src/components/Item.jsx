
// AQUI SE CONSTRUIRAR EL ITEM DE LA SOLICITUD FETCH
export const Item = ({image, comicName}) => {
  // console.log(comic);


  return (
    <>
      <div>
        <img src={image}  />
        <h1>{comicName}</h1>
      </div>
      
    </>
    
  )
}
