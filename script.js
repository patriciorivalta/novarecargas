function comprar(producto){

let mensaje =
`Hola Nova Recargas 👋

Quiero comprar:

${producto}`;

let url =
"https://wa.me/5493572592174?text=" +
encodeURIComponent(mensaje);

window.open(url,"_blank");

}
