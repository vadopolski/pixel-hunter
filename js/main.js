import {greetingElement} from './greeting.js';



const mainElement = document.querySelector(`#main`);

mainElement.innerHTML = ``;
mainElement.appendChild(greetingElement);

// const selectSlide = (element) => {
//   mainElement.innerHTML = ``;
//   mainElement.appendChild(element.cloneNode(true));
// };
//
// const screens = Array.from(document.querySelectorAll(`template`)).
//   map((it) => it.content);
//
// let current = 0;
// const select = (index) => {
//   index = index < 0 ? screens.length - 1 : index;
//   index = index >= screens.length ? 0 : index;
//   current = index;
//   selectSlide(screens[current]);
// };
//
// document.addEventListener(`keydown`, (evt) => {
//   switch (evt.keyCode) {
// case RIGHT_ARROW:
//     select(current + 1);
//   break;
// case LEFT_ARROW:
//     select(current - 1);
//   break;
// }
// });
//
// select(0);

