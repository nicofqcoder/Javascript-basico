var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nonbre: "Laptop", costo: 20000 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});