const misArticulos = [
    {img: "../public/img/robe-frente-gryffindor.webp", nombre: "Tunica Gryffindor", precio: 10500, id:"1" , idCat:"1"},
    {img: "../public/img/robe-frente-slytherin.webp" , nombre: "Tunica Slytherin", precio: 10500, id:"2", idCat:"2"},
    {img: "../public/img/robe-huffe.webp" , nombre: "Tunica Hufflepuff", precio: 10500, id:"3", idCat:"3"},
    {img:  "../public/img/robe-raven.webp", nombre: "Tunica Ravenclaw", precio: 10500 , id:"4", idCat:"4"},
    {img:  "../public/img/buso-gryff.webp", nombre: "Buzo Gryffindor", precio: 6500 , id:"5", idCat:"1"},
    {img:  "../public/img/buso-slytherin.webp", nombre: "Buzo Slytherin", precio: 6500 , id:"6", idCat:"2"},
    {img:  "../public/img/buso-huff.webp", nombre: "Buzo Hufflepuff", precio: 6500 , id:"7", idCat:"3"},
    {img: "../public/img/buso-raven.webp" , nombre: "Buzo Ravenclaw", precio: 6500 , id:"8", idCat:"4"},
    {img:  "../public/img/book-gyrff.webp", nombre: "Libro Gryffindor", precio: 1200 , id:"9", idCat:"1"},
    {img:  "../public/img/book-slytherin.webp", nombre: "Libro Slytherin", precio: 1200 , id:"10", idCat:"2"},
    {img:  "../public/img/book-huff.webp", nombre: "Libro Hufflepuff", precio: 1200 , id:"11", idCat:"3"},
    {img:  "../public/img/book-raven.webp", nombre: "Libro Ravenclaw", precio: 1200 , id:"12", idCat:"4"},
    {img:  "../public/img/bufanda-gryff.webp", nombre: "Bufanda Gryffindor", precio: 2800 , id:"13", idCat:"1"},
    {img:  "../public/img/bufanda-slytherin.webp", nombre: "Bufanda Slytherin", precio: 2800 , id:"14", idCat:"2"},
    {img:  "../public/img/bufanda-huff.webp", nombre: "Bufanda Hufflepuff", precio: 2800 , id:"15", idCat:"3"},
    {img:  "../public/img/bufanda-raven.webp", nombre: "Bufanda Ravenclaw", precio: 2800 , id:"16", idCat:"4"},

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

