function mostrarMensaje(){

const mensajes=[

"🌸 Tu sonrisa tiene más poder del que imaginas.",

"🦋 Hoy puede ser un día bonito si le das una oportunidad.",

"✨ Hay personas que hacen más agradable este mundo.",

"🌷 Nunca olvides lo especial que eres.",

"🌙 Incluso las estrellas necesitan oscuridad para brillar."

];

let numero=Math.floor(
Math.random()*mensajes.length
);

document.getElementById("mensaje").innerHTML=
mensajes[numero];

}
