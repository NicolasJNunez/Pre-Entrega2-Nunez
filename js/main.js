// Clase constructora de comidas

class Comidas {
  constructor(imagen, nombre, precio, categoria) {
    this.identificacion = this.crearID();
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
  crearID() {
    let numero = parseInt(Math.random() * 10_000);
    return numero;
  }
}

const ARRAY_DE_COMIDAS = [
  new Comidas(`🍚`, `Arroz`, 500, `Cereales`),
  new Comidas(`🍖`, `Carne`, 1600, `Carnes`),
  new Comidas(`🥓`, `Bacon`, 1000, `Carnes`),
  new Comidas(`🍜`, `Fideos`, 450, `Cereales`),
  new Comidas(`🥛`, `Leche`, 600, `Lacteos`),
  new Comidas(`🧀`, `Queso`, 1700, `Lacteos`),
  new Comidas(`🍔`, `Hamburguesa`, 1200, `Fast Food`),
  new Comidas(`🍕`, `Pizza`, 1500, `Fast Food`),
  new Comidas(`🥗`, `Ensalada`, 800, `Vegetales`),
  new Comidas(`🍓`, `Fresas`, 300, `Frutas`),
  new Comidas(`🍗`, `Pollo`, 1200, `Carnes`),
  new Comidas(`🥩`, `Bistec`, 1800, `Carnes`),
  new Comidas(`🍟`, `Papas Fritas`, 700, `Acompañamientos`),
  new Comidas(`🥪`, `Sandwich`, 900, `Bocadillos`),
  new Comidas(`🥙`, `Kebab`, 1500, `Fast Food`),
  new Comidas(`🌮`, `Taco`, 1000, `Fast Food`),
  new Comidas(`🥟`, `Empanada`, 600, `Fast Food`),
  new Comidas(`🍣`, `Sushi`, 2000, `Fast Food`),
  new Comidas(`🍨`, `Helado`, 400, `Postres`),
  new Comidas(`🍞`, `Pan`, 700, `Cereales`),
  new Comidas(`🍰`, `Pastel de Chocolate`, 1200, `Postres`),
  new Comidas(`🍪`, `Galletas`, 500, `Postres`),
  new Comidas(`🍦`, `Helado de Vainilla`, 700, `Postres`),
  new Comidas(`🍩`, `Donas`, 600, `Postres`)
];

// Creador de tarjetas 

const CONTAINER = document.querySelector(`.contenedor`);

function crearCard (comida) {
  return `<div class="card">
            <div class="content">
              <div class="title">${comida.nombre}</div>
              <div class="price">$${comida.precio}</div>
              <div class="description">${comida.imagen}</div>
            </div>
            <span>ID: ${comida.identificacion}</span>
          </div>`
}

function cargarProductos(array) {
  CONTAINER.innerHTML = ``
  array.forEach((comida) => {
    CONTAINER.innerHTML += crearCard(comida)
  })
}

cargarProductos(ARRAY_DE_COMIDAS);


//  Buscar identificación

function buscarComida(id) {
  let busqueda = ARRAY_DE_COMIDAS.find((comida)=> comida.identificacion === parseInt(id));
  return busqueda;
}

// Finalizar compra

const CARRITO = [];

function completarCompra() {
  let resultado = CARRITO.reduce((total,comida)=> total + comida.precio, 0);
  console.table(CARRITO);
  console.log(`Total: $${resultado} ¡Muchas gracias por su compra! 🎉`);
  alert(`Total: $${resultado}. Detalles de la compra en consola 📋`);
}

// Función comprar

function comprar () {
  let codigo = prompt(`Ingresa el ID de lo que deseas comprar 📟`);
  let comidaElegida = buscarComida(codigo);
  if (comidaElegida !== undefined) {
    let cantidadDeUnidades;
    do {
      cantidadDeUnidades = parseInt(prompt(`¿Cantidad de unidades de ${comidaElegida.nombre.toUpperCase()} ${comidaElegida.imagen}?`));
      if (isNaN(cantidadDeUnidades)) {
        alert(`Por favor, introduce un número válido para la cantidad.`);
      }
    } while (isNaN(cantidadDeUnidades));
    if (cantidadDeUnidades === 1) {
      CARRITO.push(comidaElegida);
      alert(`El producto "${comidaElegida.nombre.toUpperCase()} ${comidaElegida.imagen}" fue agregado a su carrito 🛒`);
    } else {
      for (let i = 0; i < cantidadDeUnidades; i++) {
        CARRITO.push(comidaElegida);
      }
      alert(`Fueron agregadas ${cantidadDeUnidades} unidades de "${comidaElegida.nombre.toUpperCase()} ${comidaElegida.imagen}" a su carrito 🛒`);
    }
    let respuesta = confirm (`¿Quiere agregar otro producto? 🛍️`)
    if (respuesta === true) {
      comprar();
    } else {
      completarCompra();
    }
  } else {
    let opcion = confirm(`Código inexistente. Presione "Aceptar" para reintentarlo.`);
    if (opcion === true) {
    comprar();
  }
}
}


































// -----------------------------------------------------------------------------------------------------------

// Buscador

const BUSCADOR = document.querySelector(`input#buscador`);
BUSCADOR.addEventListener(`keypress`, (e) => {
  if (e.key === `Enter`) {
    e.preventDefault();
    const RESULTADO = ARRAY_DE_COMIDAS.filter((comida) => {
      return comida.nombre.toLowerCase().includes(BUSCADOR.value.toLowerCase());
    });
    cargarProductos(RESULTADO);
  }
});


// Efecto "maquina de escribir" header

// Fuente: https://github.com/mattboldt/typed.js/

let typingEffect = new Typed("#element", {
  strings: ["Almacén", "Quiosco", "Mercado", "Rotiseria"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  startDelay: 800,
  backDelay: 800
})