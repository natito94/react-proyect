import React from 'react'

const ItemCount = (inicial, stock, agregarProducto) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar} >-</button>
                <p>{contador}</p>
                <button onClick={incrementar} >+</button>
            </div>
            <button onClick={() => agregarProducto(contador)}>Agregar al carrito</button>

        </>
    )
}

export default ItemCount