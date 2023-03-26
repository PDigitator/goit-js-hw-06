// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// •	Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// •	Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');

const notInFocus = () => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.contains('invalid')
      ? textInput.classList.replace('invalid', 'valid')
      : textInput.classList.add('valid');
  } else {
    textInput.classList.contains('valid')
      ? textInput.classList.replace('valid', 'invalid')
      : textInput.classList.add('invalid');
  }
};
textInput.addEventListener('blur', notInFocus);
