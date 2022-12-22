//Array
let productos = [
    { nombre: "JeansB", id: 0, categoria: "pantalones", stock: 4, precio: 20, imgUrl: "./img/productos/JeansB.png" },
    { nombre: "MediasC", id: 1, categoria: "medias", stock: 10, precio: 30, imgUrl: "./img/productos/MediasC.png" },
    { nombre: "MediasB", id: 2, categoria: "medias", stock: 8, precio: 20, imgUrl: "./img/productos/MediasB.png" },
    { nombre: "Bluney", id: 3, categoria: "remeras", stock: 12, precio: 20, imgUrl: "./img/productos/Bluney.png" },
    { nombre: "PantC", id: 4, categoria: "pantalones", stock: 14, precio: 45, imgUrl: "./img/productos/PantC.png" },
    { nombre: "DarkC", id: 5, categoria: "remeras", stock: 20, precio: 20, imgUrl: "./img/productos/DarkC.png" },
    { nombre: "Celestyn", id: 6, categoria: "accesorios", stock: 3, precio: 20, imgUrl: "./img/productos/Celestyn.png" },
    { nombre: "Celest", id: 7, categoria: "vestidos", stock: 11, precio: 50, imgUrl: "./img/productos/Celest.png" },
    { nombre: "LightE", id: 8, categoria: "remeras", stock: 16, precio: 15, imgUrl: "./img/productos/LightE.png" },
    { nombre: "LightB", id: 9, categoria: "vestidos", stock: 6, precio: 50, imgUrl: "./img/productos/LightB.png" },
    { nombre: "LightE2", id: 10, categoria: "remeras", stock: 7, precio: 20, imgUrl: "./img/productos/LightE2.png" }
]

let contenedorProductos = document.getElementById("mainpro")
renderizarProductos(productos)
//renderizar el html del array selleccionada
function renderizarProductos(arrayDeProductos) {
    contenedorProductos.innerHTML = ""
    for (const producto of arrayDeProductos) {
        contenedorProductos.innerHTML += `
        <div class="mainpro__hijo" id="producto${producto.id}">
            <img src="${producto.imgUrl}" alt="medias de color azul" style="height:200px;width:200px">
            <h2>${producto.nombre}</h2>
            <p>${producto.precio}$</p>
            <button type="button" class="btn btn-primary" id="producto${producto.id}__boton"><a href="./pages/vistaProduc.html">Ver producto</a></button>
        </div>`
    }
}
//Buscador por categoria y nombre del producto
let buscador = document.getElementById("search")
buscador.addEventListener("change", renderizarProductosFiltrados)
function renderizarProductosFiltrados() {
    renderizarProductos(productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.includes(buscador.value.toLowerCase())))
}
//le pone el evento click a los botones
for (let i = 0; i < productos.length; i++) {
    let verProductoBoton = document.getElementById("producto" + i + "__boton")
    verProductoBoton.addEventListener("click", verProducto)
    const producto = productos[i]
    function verProducto() {
        sessionStorage.setItem("compra", JSON.stringify(producto))
    }
}

//filtrar por categorias
for (let i = 1; i <= 6; i++) {
    let mostrarPorCate=document.getElementById("categoria"+i)
    mostrarPorCate.addEventListener("click",renderizarCate)
    function renderizarCate() {
        if (i<6) {
            renderizarProductos(productos.filter(producto =>producto.categoria===mostrarPorCate.innerText.toLowerCase()))
        } else {
            renderizarProductos(productos)
        }
    }
}
