// ======================
// MENSAJES POR SIGNO
// ======================

const mensajes = {
  Aries: [
    "Hoy es un buen día para tomar la iniciativa.",
    "Confía en tu energía interior.",
    "El universo te empuja a actuar."
  ],
  Tauro: [
    "La paciencia será tu mayor aliada.",
    "Cuida lo que valoras.",
    "La estabilidad trae recompensas."
  ],
  Géminis: [
    "Una conversación traerá claridad.",
    "Tu curiosidad abrirá nuevas puertas.",
    "El cambio es tu aliado."
  ],
  Cáncer: [
    "Escucha tu intuición.",
    "Un lazo emocional se fortalece.",
    "El hogar trae calma."
  ],
  Leo: [
    "Brilla sin miedo.",
    "Tu liderazgo inspira a otros.",
    "Hoy eres el centro de atención."
  ],
  Virgo: [
    "El orden trae paz.",
    "Los detalles importan.",
    "Confía en tu disciplina."
  ],
  Libra: [
    "Busca el equilibrio.",
    "Una decisión justa se acerca.",
    "La armonía te rodea."
  ],
  Escorpio: [
    "Una transformación comienza.",
    "Confía en tu poder interno.",
    "Lo oculto se revela."
  ],
  Sagitario: [
    "La aventura te llama.",
    "Un nuevo camino se abre.",
    "Confía en el viaje."
  ],
  Capricornio: [
    "El esfuerzo da frutos.",
    "La constancia será recompensada.",
    "Hoy avanzas con firmeza."
  ],
  Acuario: [
    "Una idea diferente brilla.",
    "Rompe la rutina.",
    "Tu originalidad inspira."
  ],
  Piscis: [
    "Conecta con tu mundo interior.",
    "La sensibilidad es tu fortaleza.",
    "Un mensaje llega en sueños."
  ]
};

// ======================
// FUNCIONES AUXILIARES
// ======================

function obtenerSigno(dia, mes) {
  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
  return "Piscis";
}

// ======================
// FUNCIÓN PRINCIPAL
// ======================

function leerDestino() {
  const fecha = document.getElementById("fecha").value;

  if (!fecha) {
    alert("Por favor selecciona una fecha 📅");
    return;
  }

  const partes = fecha.split("-");
  const dia = Number(partes[2]);
  const mes = Number(partes[1]);

  const signo = obtenerSigno(dia, mes);

  const listaMensajes = mensajes[signo];
  const mensajeAleatorio =
    listaMensajes[Math.floor(Math.random() * listaMensajes.length)];

  const energiaDelDia = dia % 2 === 0
    ? "La luna favorece la reflexión 🌙"
    : "El sol potencia tu acción ☀️";

  const resultado = document.getElementById("resultado");

  resultado.innerText =
    "✨ Signo: " + signo +
    "\n🔮 Destino: " + mensajeAleatorio +
    "\n🌌 Energía: " + energiaDelDia;

  resultado.classList.remove("oculto");
}