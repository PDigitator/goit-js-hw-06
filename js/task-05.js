// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const inputNameInputHandler = event => {
  outputName.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
};
inputName.addEventListener('input', inputNameInputHandler);
