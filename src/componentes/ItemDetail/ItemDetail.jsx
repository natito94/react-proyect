import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState (0);

  const {agregarArticulo} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => { 
    setAgregarCantidad (cantidad);

    const item = {id, nombre, precio};
    agregarArticulo (item, cantidad);

  }
 

  return (
    <div className='detalle container'>
    <img src={img} alt={nombre}/>
    <h3>Nombre: {nombre}</h3>
    <p>Precio: {precio}</p>
    <p>ID:{id}</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illo deleniti soluta doloremque quasi volupta</p>

    {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} agregarProducto={manejadorCantidad}/>)
        }
</div>
  )
}

export default ItemDetail