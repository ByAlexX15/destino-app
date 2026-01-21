const mensajes = {
  Aries: ["Hoy es un buen día para tomar la iniciativa.", "Confía en tu energía."],
  Tauro: ["La paciencia será tu mayor aliada.", "La estabilidad trae recompensas."],
  Géminis: ["El cambio es tu aliado.", "Tu curiosidad abrirá puertas."],
  Cáncer: ["Escucha tu intuición.", "El hogar trae calma."],
  Leo: ["Brilla sin miedo.", "Tu liderazgo inspira."],
  Virgo: ["El orden trae paz.", "Los detalles importan."],
  Libra: ["Busca el equilibrio.", "La armonía te rodea."],
  Escorpio: ["Una transformación comienza.", "Lo oculto se revela."],
  Sagitario: ["La aventura te llama.", "Confía en el viaje."],
  Capricornio: ["El esfuerzo da frutos.", "Avanzas con firmeza."],
  Acuario: ["Una idea diferente brilla.", "Rompe la rutina."],
  Piscis: ["La sensibilidad es tu fortaleza.", "Un mensaje llega en sueños."]
};

const coloresSigno = {
  Aries: { light: "rgba(239, 68, 68, 0.25)", soft: "rgba(239, 68, 68, 0.15)", medium: "rgba(239, 68, 68, 0.3)", strong: "rgba(239, 68, 68, 0.5)" },
  Tauro: { light: "rgba(34, 197, 94, 0.25)", soft: "rgba(34, 197, 94, 0.15)", medium: "rgba(34, 197, 94, 0.3)", strong: "rgba(34, 197, 94, 0.5)" },
  Géminis: { light: "rgba(59, 130, 246, 0.25)", soft: "rgba(59, 130, 246, 0.15)", medium: "rgba(59, 130, 246, 0.3)", strong: "rgba(59, 130, 246, 0.5)" },
  Cáncer: { light: "rgba(148, 163, 184, 0.25)", soft: "rgba(148, 163, 184, 0.15)", medium: "rgba(148, 163, 184, 0.3)", strong: "rgba(148, 163, 184, 0.5)" },
  Leo: { light: "rgba(250, 204, 21, 0.3)", soft: "rgba(250, 204, 21, 0.2)", medium: "rgba(250, 204, 21, 0.4)", strong: "rgba(250, 204, 21, 0.6)" },
  Virgo: { light: "rgba(16, 185, 129, 0.25)", soft: "rgba(16, 185, 129, 0.15)", medium: "rgba(16, 185, 129, 0.3)", strong: "rgba(16, 185, 129, 0.5)" },
  Libra: { light: "rgba(236, 72, 153, 0.25)", soft: "rgba(236, 72, 153, 0.15)", medium: "rgba(236, 72, 153, 0.3)", strong: "rgba(236, 72, 153, 0.5)" },
  Escorpio: { light: "rgba(147, 51, 234, 0.3)", soft: "rgba(147, 51, 234, 0.2)", medium: "rgba(147, 51, 234, 0.4)", strong: "rgba(147, 51, 234, 0.6)" },
  Sagitario: { light: "rgba(249, 115, 22, 0.25)", soft: "rgba(249, 115, 22, 0.15)", medium: "rgba(249, 115, 22, 0.3)", strong: "rgba(249, 115, 22, 0.5)" },
  Capricornio: { light: "rgba(100, 116, 139, 0.25)", soft: "rgba(100, 116, 139, 0.15)", medium: "rgba(100, 116, 139, 0.3)", strong: "rgba(100, 116, 139, 0.5)" },
  Acuario: { light: "rgba(14, 165, 233, 0.25)", soft: "rgba(14, 165, 233, 0.15)", medium: "rgba(14, 165, 233, 0.3)", strong: "rgba(14, 165, 233, 0.5)" },
  Piscis: { light: "rgba(99, 102, 241, 0.25)", soft: "rgba(99, 102, 241, 0.15)", medium: "rgba(99, 102, 241, 0.3)", strong: "rgba(99, 102, 241, 0.5)" }
};

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

function aplicarAnimacionPorSigno(signo) {
  const card = document.getElementById("resultado");
  const fuego = ["Aries", "Leo", "Sagitario"];
  const tierra = ["Tauro", "Virgo", "Capricornio"];
  const aire = ["Géminis", "Libra", "Acuario"];
  
  if (fuego.includes(signo)) card.classList.add("anim-fuego");
  else if (tierra.includes(signo)) card.classList.add("anim-tierra");
  else if (aire.includes(signo)) card.classList.add("anim-aire");
  else card.classList.add("anim-agua");
}

function limpiarAnimaciones(card) {
  card.classList.remove(
    "anim-fuego",
    "anim-tierra",
    "anim-aire",
    "anim-agua"
  );
}

function leerDestino() {
  const fecha = document.getElementById("fecha").value;
  if (!fecha) return alert("Selecciona una fecha 📅");

  const [year, mes, dia] = fecha.split("-").map(Number);
  const signo = obtenerSigno(dia, mes);
  const mensaje = mensajes[signo][Math.floor(Math.random() * mensajes[signo].length)];

  const card = document.getElementById("resultado");
  const texto = document.getElementById("textoDestino");

  // RESET
  card.className = "tarot-card";
  limpiarAnimaciones(card); 
  void card.offsetWidth; 
  

  // COLORES GLOW
  const c = coloresSigno[signo];
  card.style.setProperty("--glow-color-light", c.light);
  card.style.setProperty("--glow-color-soft", c.soft);
  card.style.setProperty("--glow-color-medium", c.medium);
  card.style.setProperty("--glow-color-strong", c.strong);

  // CONTENIDO
texto.innerHTML = `
<div class="titulo-signo">✨ ${signo}</div>

<div class="titulo-destino">🔮 Mensaje Akáshico</div>
${mensaje}
`;

  // ACTIVAR TODO
  card.classList.add("glow-activo");

  setTimeout(() => {
    card.classList.add("scanner-activo", "revelar-texto");
    aplicarAnimacionPorSigno(signo);
  }, 500);
}

const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 80; i++) {
  const star = document.createElement('span');
  star.classList.add('star');

  if (Math.random() > 0.6) {
    star.classList.add('glow');
  }

  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 5 + 's';

  starsContainer.appendChild(star);
}