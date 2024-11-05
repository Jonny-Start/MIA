document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("mode_view", 1);
});

const iframe = document.getElementById("realtime-voice-invisible-iframe");

const buttonMic = document.getElementById("buttonMic");
const contentInput = document.getElementById("contentInput");
const visualiser = document.getElementById("visualiser");
const changeText = document.getElementById("changeText");
const iconMic = document.getElementById("iconMic");
const iconPause = document.getElementById("iconPause");
const textMic = document.getElementById("textMic");

const change_active_view = () => {
  // 1 = Text / 2 = Voice
  let currentMode = localStorage.getItem("mode_view");
  let newMode = currentMode == 1 ? 2 : 1;

  if (newMode == 2) {
    contentInput.classList.contains("hide")
      ? ""
      : contentInput.classList.add("hide");

    visualiser.classList.contains("hide")
      ? visualiser.classList.remove("hide")
      : "";
    changeText.classList.contains("hide")
      ? changeText.classList.remove("hide")
      : "";

    changeIconMic("connect");
    // connect_interaction("connect");
  } else {
    contentInput.classList.contains("hide")
      ? contentInput.classList.remove("hide")
      : "";

    visualiser.classList.contains("hide")
      ? ""
      : visualiser.classList.add("hide");
    changeText.classList.contains("hide")
      ? ""
      : changeText.classList.add("hide");

    changeIconMic("disconnect");
    connect_interaction("disconnect");
    textMic.innerText = "Presiona para hablar con Mia";
  }

  localStorage.setItem("mode_view", newMode);
  return;
};

const connect_interaction = (type_method) => {
  console.log("connect_interaction -> type_method", type_method);

    changeIconMic(type_method);
    iframe.contentWindow.postMessage(
      {
        type: type_method,
      },
      "*"
    );
};

buttonMic.addEventListener("click", () => {
  let value = buttonMic.value == "disconnect" ? "connect" : "disconnect";
  let currentMode = localStorage.getItem("mode_view");
  currentMode == 1 && change_active_view();

  return connect_interaction(value);
});

changeText.addEventListener("click", () => {
  return change_active_view();
});

/**
 * Cambiar icono del micrófono
 * @param {String} option
 * @returns void
 * @description Cambia el icono del micrófono y el texto del botón
 */
function changeIconMic(option) {
  if (option == "connect") {
    iconMic.classList.contains("hide") ? "" : iconMic.classList.add("hide");
    iconPause.classList.contains("hide")
      ? iconPause.classList.remove("hide")
      : "";
    buttonMic.value = "connect";
    textMic.innerText = "Pausar conversación";
  } else {
    iconMic.classList.contains("hide") ? iconMic.classList.remove("hide") : "";
    iconPause.classList.contains("hide") ? "" : iconPause.classList.add("hide");
    buttonMic.value = "disconnect";

    let currentMode = localStorage.getItem("mode_view");
    currentMode == 2
      ? (textMic.innerText = "Reanudar conversación")
      : (textMic.innerText = "Presiona para hablar con Mia");
  }
}

/**
 * Animación de sonido
 */
var siriWave = new SiriWave({
  container: document.getElementById("visualiser"),
  cover: true, // means the visualisation scales *responsively* according to the element's dimensions
  amplitude: 4,
  // frequency: 2,
  speed: 0.2,
  width: 640,
  height:400,
  style: "ios9",
});

/**
 * Breakpoint
 * @param {MediaQueryListEvent} e
 */
const mediaQuery = window.matchMedia("(max-width: 820px)");

// Función para manejar los cambios en el tamaño de pantalla
function handleScreenChange(e) {
  const search = document.getElementById("search");
  const contentNext = document.getElementById("contentNext");

  if (e.matches) {
    // El ancho es menor o igual a 820px
    // Aquí puedes añadir código específico para dispositivos móviles
    search.placeholder = "Mensaje";
    contentNext.classList.contains("desktop")
      ? contentNext.classList.remove("desktop")
      : "";
    contentNext.classList.contains("mobile")
      ? ""
      : contentNext.classList.add("mobile");
  } else {
    // El ancho es mayor a 820px
    // Aquí puedes añadir código específico para dispositivos de escritorio
    search.placeholder = "Envía un mensaje a Mia...";
    contentNext.classList.contains("mobile")
      ? contentNext.classList.remove("mobile")
      : "";
    contentNext.classList.contains("desktop")
      ? ""
      : contentNext.classList.add("desktop");
  }
}

// Escucha los cambios en el tamaño de pantalla
mediaQuery.addListener(handleScreenChange);

// Ejecuta la función inicialmente para verificar el tamaño actual
handleScreenChange(mediaQuery);
