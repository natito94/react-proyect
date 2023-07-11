import Item from "../Item/Item"

const ItemList = ({articulos}) => {
  return (
    <div className="contenedor container col-xl-3,col-md-6, col-xs-12">
        {articulos.map(art => <Item key = {art.id} {...art} />)}
    </div>
  )
}

export default ItemList