const misArticulos = [
    {img: "../img/robe-frente-gryffindor.webp", nombre: "Tunica Gryffindor", stock:1000 , precio: 10500, id:"1" , idCat:"1"},
    {img: "../img/robe-frente-slytherin.webp" , nombre: "Tunica Slytherin", stock:1000 , precio: 10500, id:"2", idCat:"2"},
    {img: "../img/robe-huffe.webp" , nombre: "Tunica Hufflepuff", stock:1000 , precio: 10500, id:"3", idCat:"3"},
    {img:  "../img/robe-raven.webp", nombre: "Tunica Ravenclaw", stock:1000 , precio: 10500 , id:"4", idCat:"4"},
    {img:  "../img/buso-gryff.webp", nombre: "Buzo Gryffindor", stock:1000 , precio: 6500 , id:"5", idCat:"1"},
    {img:  "../img/buso-slytherin.webp", nombre: "Buzo Slytherin", stock:1000 , precio: 6500 , id:"6", idCat:"2"},
    {img:  "../img/buso-huff.webp", nombre: "Buzo Hufflepuff", stock:1000 , precio: 6500 , id:"7", idCat:"3"},
    {img: "../img/buso-raven.webp" , nombre: "Buzo Ravenclaw", stock:1000 , precio: 6500 , id:"8", idCat:"4"},
    {img:  "../img/book-gyrff.webp", nombre: "Libro Gryffindor", stock:1000 , precio: 1200 , id:"9", idCat:"1"},
    {img:  "../img/book-slytherin.webp", nombre: "Libro Slytherin", stock:1000 , precio: 1200 , id:"10", idCat:"2"},
    {img:  "../img/book-huff.webp", nombre: "Libro Hufflepuff", stock:1000 , precio: 1200 , id:"11", idCat:"3"},
    {img:  "../img/book-raven.webp", nombre: "Libro Ravenclaw", stock:1000 , precio: 1200 , id:"12", idCat:"4"},
    {img:  "../img/bufanda-gryff.webp", nombre: "Bufanda Gryffindor", stock:1000 , precio: 2800 , id:"13", idCat:"1"},
    {img:  "../img/bufanda-slytherin.webp", nombre: "Bufanda Slytherin", stock:1000 , precio: 2800 , id:"14", idCat:"2"},
    {img:  "../img/bufanda-huff.webp", nombre: "Bufanda Hufflepuff", stock:1000 , precio: 2800 , id:"15", idCat:"3"},
    {img:  "../img/bufanda-raven.webp", nombre: "Bufanda Ravenclaw", stock:1000 , precio: 2800 , id:"16", idCat:"4"},

]

export const getArticulos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misArticulos);
        }, 2000)
    })
}

//funcion para retornar un solo articulo:

export const getArticulo = (id) =>{
    return new Promise(resolve =>{
        setTimeout (() =>{
            const articulo = misArticulos.find(art=> art.id === id);
            resolve(articulo)
        }, 2000)
    })
}

//funcion array categorias:

export const getArticulosCategoria = (idCategoria) =>{
    return new Promise (resolve => {
        setTimeout(() =>{
            const articuloCategoria = misArticulos.filter(art => art.idCat === idCategoria);
            resolve(articuloCategoria);
        }, 2000)

    })
}

