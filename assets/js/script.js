//ALQUILER

// Generando Arreglos de propiedades Alquiler
const propiedades_alquileres = [
    {
        id: 1,
        nombre: 'Apartamento en el centro de la ciudad',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_725075-MLC75665676682_042024-O.webp',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: 'Punta Arenas 6600, La Florida.',
        habitaciones: 2,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        id: 2,
        nombre: 'Apartamento luminoso con vista al mar',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy82yziMwEM3x8DUxlqFAMhZS4MFu9Jzxlmg&s',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: 'Avenida Manuel Montt, 1596. Viña del Mar.',
        habitaciones: 3,
        costo: 2500,
        smoke: false,
        pets: true
    },
    {
        id: 3,
        nombre: 'Condominio moderno en zona residencial',
        imagen: 'https://www.shutterstock.com/image-photo/new-modern-block-flats-green-600nw-2461488711.jpg',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Av. Vitacura 5588, Las Condes.',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: false
    },
    {
        id: 4,
        nombre: 'Apartamento al medio de la selva',
        imagen: 'https://images.adsttc.com/media/images/5a09/9141/b22e/3824/ce00/0422/newsletter/feature_image.jpg?1510576440',
        descripcion: 'Este exotico apartamento se ubicado en la selva ofrece una impresionante experiencia en la naturaleza',
        ubicacion: 'Amazonas 457989, Perú.',
        habitaciones: 2,
        costo: 5500,
        smoke: false,
        pets: true
    },
    {
        id: 5,
        nombre: 'Apartamento frente a la montaña',
        imagen: 'https://www.iloveski.org/wp-content/uploads/2024/09/decoracion-salon-casa-montana-2025.jpg',
        descripcion: 'Este elegante y moderno apartamento ofrece vistas nunca antes vistas al medio de la naturaleza',
        ubicacion: 'Nevados de Sollipulli, Melipeuco.',
        habitaciones: 3,
        costo: 4000,
        smoke: false,
        pets: true
    }
];

// Llamo al id del contenedor en HTML
const alquiler = document.querySelector('#propiedades-alquiler');

let alquileres =""
// Recorro las propiedades y agrego el contenido al HTML
for (let ApartamentosAlquiler of propiedades_alquileres) {
    alquileres += `
        <div class="propiedad-alquiler">
            <img src="${ApartamentosAlquiler.imagen}" alt="${ApartamentosAlquiler.nombre}">
            <h2>${ApartamentosAlquiler.nombre}</h2>
            <p>${ApartamentosAlquiler.descripcion}</p>
            <p>Ubicación: ${ApartamentosAlquiler.ubicacion}</p>
            <p>Habitaciones: ${ApartamentosAlquiler.habitaciones}</p>
            <p>Precio: $${ApartamentosAlquiler.costo}</p>
            <p>${ApartamentosAlquiler.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
            <p>${ApartamentosAlquiler.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
        </div>
    `;
}


//alquiler.innerHTML = alquileres

//Se crea condición para utilizar solo un script para las propiedades de ventas y alquileres

alquiler ? alquiler.innerHTML = alquileres : ""

//VENTAS

// Generando Arreglos de propiedades Ventas
const propiedades_ventas = [
    {
        id: 1,
        nombre: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://www.cosasdearquitectos.com/wp-content/uploads/ASTON1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: true
    },
    {
        id: 2,
        nombre: 'Apartamento acogedor en la montaña',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5iCE7711_cDQSdN0__1UxtzUb596qLcTdw&s',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: false,
        pets: true
    },
    {
        id: 3,
        nombre: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Penthouse_Rendering.jpg/800px-Penthouse_Rendering.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 5,
        costo: 5000,
        smoke: true,
        pets: true
    },
    {
        id: 4,
        nombre: 'Penthouse de moderno con vista hermosa',
        imagen: 'https://www.elmueble.com/medio/2020/02/05/00397944_69cbc4cb_2000x1333.jpg',
        descripcion: 'Este penthouse moderno ofrece una terraza y vistas panorámica a las montañas',
        ubicacion: '859674 Sun, Irlanda',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: true
    },
    {
        id: 5,
        nombre: 'Apartamento de lujo en la playa',
        imagen: 'https://img.freepik.com/fotos-premium/pequena-casa-playa-moderna-lujo-casa-playa_579956-4762.jpg',
        descripcion: 'Este apartamento de lujo se encuentra frente a la playa ofrece unas vistas espectaculares al mar',
        ubicacion: '567 Hollywood Boulevard CA 56789',
        habitaciones: 2,
        costo: 10000,
        smoke: true,
        pets: true
    }
];


// Llamo al id del contenedor en HTML
const ventas = document.querySelector('#propiedades-venta');

let ventasdeptos = ""

// Recorro las propiedades y agrego el contenido al HTML
for (let ApartamentosVenta of propiedades_ventas) {
    ventasdeptos += `
        <div class="propiedad">
            <img src="${ApartamentosVenta.imagen}" alt="${ApartamentosVenta.nombre}">
            <h2>${ApartamentosVenta.nombre}</h2>
            <p>${ApartamentosVenta.descripcion}</p>
            <p>Ubicación: ${ApartamentosVenta.ubicacion}</p>
            <p>Habitaciones: ${ApartamentosVenta.habitaciones}</p>
            <p>Precio: $${ApartamentosVenta.costo}</p>
            <p>${ApartamentosVenta.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
            <p>${ApartamentosVenta.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
        </div>
    `
}


ventas.innerHTML = ventasdeptos


//-->Otra manera es con formula:

// const ventas = document.querySelector('#propiedades-venta');

// let deptos = ""


// function renderCard(arregloDePropiedades){
    
    // -->Recorro las propiedades y agrego el contenido al HTML
//     for (let propiedad of arregloDePropiedades) {
//         deptos += `
//             <div class="propiedad">
//                 <img src="${propiedad.imagen}" alt="${propiedad.nombre}">
//                 <h2>${propiedad.nombre}</h2>
//                 <p>${propiedad.descripcion}</p>
//                 <p>Ubicación: ${propiedad.ubicacion}</p>
//                 <p>Habitaciones: ${propiedad.habitaciones}</p>
//                 <p>Precio: $${propiedad.costo}</p>
//                 <p>${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}</p>
//                 <p>${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
//             </div>
//         `;
//     }
//     return deptos
// }

// //renderCard(propiedades_ventas) 

// ventas ? ventas.innerHTML = renderCard(propiedades_ventas) : ""


