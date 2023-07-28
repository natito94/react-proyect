import { useState, createContext, Children } from "react";

const CarritoCompras = createContextontext({
    carrito: [],
    total: 0,
    cantitadTotal: 0
})

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const agregarArticulo = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        } else {
            const CarritoNuevo = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(CarritoNuevo);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }
    }

    const eliminarArticulo = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoNuevo = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoNuevo);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));

    }
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return(
        <CarritoContext.Provider value ={{carrito, agregarArticulo, eliminarArticulo, vaciarCarrito, total, cantidadTotal}}>
            {children}
        </CarritoContext.Provider>
    )


}
