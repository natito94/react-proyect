import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='detalle container'>
    <img src={img} alt={nombre}/>
    <h3>Nombre: {nombre}</h3>
    <p>Precio: {precio}</p>
    <p>ID:{id}</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illo deleniti soluta doloremque quasi volupta</p>
    <button className='boton'>Agregar al carrito</button>
</div>
  )
}

export default ItemDetail