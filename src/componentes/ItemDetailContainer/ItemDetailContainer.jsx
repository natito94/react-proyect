import { useState, useEffect } from "react"
import { getArticulo } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const [articulo, setArticulo] = useState(null);
const { idItem} = useParams();

useEffect(()=>{
    getArticulo(idItem)
    .then(res => setArticulo(res))
}, [idItem])

  return (
    <div>
        <ItemDetail {...articulo}/>
    </div>
  )
}

export default ItemDetailContainer