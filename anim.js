// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Mira esta monda hasta el final pofa", time: 10 },
  { text: "Before I die", time: 20 },
  { text: "I'd like to do something nice", time: 21 },
  { text: "Take my hand and I'll take it for a ride", time: 25 },
  { text: "You hit me yesterday", time: 29 },
  { text: "Because I made you cry", time: 31},
  { text: "So before we die, I'd like to do something nice", time: 34.5 },
  { text: "I want to buy you something", time: 38 },
  { text: "But I don't have any money", time: 42 },
  { text: "No, I don't have any money", time: 44 },
  { text: "And I want to buy you something", time: 46 },
  { text: "But I don't have any money", time: 52 },
  { text: "No, I don't have any money", time: 54 },
  { text: "And if I had a car", time: 76 },
  { text: "I would trade in my car", time: 79 },
  { text: "If I had a gun I would trade in my gun", time: 81 },
  { text: "Honey, we ran from the country and we rushed to the city", time: 85 },
  { text: "And now there's nothing to be done", time: 90 },
  { text: "And now there's nothing to be done", time: 92 },
  { text: "There's nothing to be done", time: 93 },
  { text: "There's nothing to be done", time: 94 },
  { text: "Aunque ya no hablemos mucho", time: 100 },
  { text: "igual te sigo queriendo como mi mejor amiga", time: 105 },
  { text: "aunque saber si vos seguis pensado igual vea jajaja", time: 108 },
  { text: "pero x", time: 111 },
  { text: "Te quiero mucho blo, nunda me dejes de hablar", time: 113 },
  { text: ":>", time: 115 },
  { text: "Ojala te haya gustado mi pagina web ajajaja", time: 117 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);