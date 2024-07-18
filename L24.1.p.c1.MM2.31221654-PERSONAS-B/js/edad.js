const personas = {
    "Luis": 15,
    "Ana": 19,
    "José": 21,
    "Carmen": 17,
    "Rosa": 18,
    "José2": 22,
    "María": 17,
    "Luz": 19,
    "Rafael": 23,
    "Liz": 15,
    "Marcos": 20,
    "Leo": 16
};

let totalEdad = 0;
let contadorMujeres = 0;
let edadMayorMujeres = 0;

for (const nombre in personas) {
    totalEdad += personas[nombre];

    if (nombre === "Ana" || nombre === "Carmen" || nombre === "Rosa" || nombre === "María" || nombre === "Luz" || nombre === "Liz") {
        contadorMujeres++;
        if (personas[nombre] > edadMayorMujeres) {
            edadMayorMujeres = personas[nombre];
        }
    }
}

const promedioEdad = totalEdad / Object.keys(personas).length;

const salida = document.getElementById("salida");
salida.innerHTML = "Contador de Personas:";
salida.innerHTML += `<br>Promedio de Edad: ${promedioEdad.toFixed(2)}`;
salida.innerHTML += `<br>Edad Mayor entre las Mujeres: ${edadMayorMujeres}`;