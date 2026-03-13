const numero = "50558308884";

function enviarWhatsApp(servicio) {
  const mensaje = `Hola, estoy interesado en el servicio de ${servicio}. ¿Podría brindarme más información?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function enviarWhatsAppGeneral() {
  const mensaje = "Hola, quiero información general sobre los servicios de grooming y agendar una cita.";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").style.opacity="0";
document.body.classList.add("loaded");

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},1000);

},5000);
});
