import {introElement} from './module-0.js';
import {greetingElement} from './module-1.js';
import {selectSlide} from './selectSlide';

selectSlide(introElement);

const introAsterisk = document.querySelector('h1.intro__asterisk');

introAsterisk.addEventListener(`click`, () => {
  selectSlide(greetingElement);
});
