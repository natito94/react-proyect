import React, {useState, useEffect } from 'react'
import { getArticulos, getArticulosCategoria } from '../../asyncmock';
import ItemList from '../ItemLists/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [articulos, setArticulos] = useState([]);

  const {idCategoria} = useParams();

useEffect(()=> {
  const funcion = idCategoria ? getArticulosCategoria : getArticulos;
  funcion (idCategoria)
  .then(res => setArticulos(res))


}, [idCategoria])

  return (
    <>
        <h1 className='text-center mt-5'>{greeting}</h1>
        <ItemList articulos = {articulos} />
    </>
  )
}

export default ItemListContainer