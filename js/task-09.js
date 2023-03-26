// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorChange = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

colorChange.addEventListener('click', handleClick);

function handleClick() {
  colorValue.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
