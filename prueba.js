// Importar el módulo de Recorder.js
const Recorder = require('recorder-js');

// Obtener los elementos del DOM
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const audioPlayer = document.getElementById('audio-player');

// Crear una instancia de Recorder.js con la configuración deseada
const recorder = new Recorder({
  sampleRate: 44100, // Frecuencia de muestreo
  numChannels: 2 // Número de canales
});

// Agregar un manejador de eventos para el botón de comenzar a grabar
startBtn.addEventListener('click', function() {
  recorder.start();
});

// Agregar un manejador de eventos para el botón de detener la grabación
stopBtn.addEventListener('click', function() {
  recorder.stop();

  // Exportar el audio grabado y crear una URL de objeto para reproducirlo en un elemento de audio
  recorder.exportWAV(function (blob) {
    const url = URL.createObjectURL(blob);
    audioPlayer.src = url;
  });
});
