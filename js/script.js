const mensajes = {
    Aries: [
        "Hoy es un día perfecto para tomar la iniciativa.",
        "Una oportunidad aparece cuando menos lo esperas."
    ],
    Tauro: [
        "La paciencia será tu mayor aliada.",
        "Algo que parecía estancado comienza a moverse."
    ],
    Géminis: [
        "Una conversación cambiará tu rumbo.",
        "Escucha con atención, no todo se dice con palabras."
    ],
    Cáncer: [
        "Confía en tu intuición, hoy está muy fuerte.",
        "Un recuerdo trae una enseñanza importante."
    ],
    Leo: [
        "Tu luz atrae a las personas correctas.",
        "Es momento de mostrar quién eres sin miedo."
    ],
    Virgo: [
        "El orden traerá claridad a tu mente.",
        "Un pequeño detalle hará la diferencia."
    ],
    Libra: [
        "Busca el equilibrio, la respuesta está ahí.",
        "No todos los caminos son extremos."
    ],
    Escorpio: [
        "Una transformación interna está ocurriendo.",
        "Deja ir lo que ya cumplió su ciclo."
    ],
    Sagitario: [
        "Una aventura se acerca, incluso si es mental.",
        "La verdad será tu mejor guía."
    ],
    Capricornio: [
        "Tu esfuerzo pronto dará frutos.",
        "La disciplina será recompensada."
    ],
    Acuario: [
        "Tu forma de pensar es tu mayor poder.",
        "Algo diferente te abrirá nuevas puertas."
    ],
    Piscis: [
        "Tus emociones contienen la respuesta.",
        "Permítete sentir sin juzgar."
    ]
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
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
}

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

    document.getElementById("resultado").innerText =
        "✨ Signo: " + signo + "\n🔮 Destino: " + mensajeAleatorio;
}