const elementoChute = document.querySelector('#chute');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = 'pt-Br';
  recognition.start();

  recognition.addEventListener('result', onSpeak)

  function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibiChuteNaTela(chute);
    verificaChute(chute);
  }

  function exibiChuteNaTela(chute) {
    elementoChute.innerHTML = `
      <div>Você disse:</>
      <span class="box">${chute}</span>
    `
  }

  recognition.addEventListener('end', () => {
    recognition.start();
  })