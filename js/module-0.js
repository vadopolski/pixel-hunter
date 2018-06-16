import {getElementFromTemplate} from './getelement.js';
import {selectSlide} from './selectSlide';
import {greetingElement} from './module-1.js';
import {footer} from './footer';

const markup = `  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

const introElement = getElementFromTemplate(markup + footer);
const introAsterisk = introElement.querySelector('h1.intro__asterisk');

introAsterisk.addEventListener(`click`, () => {
  selectSlide(greetingElement);
});

export {introElement};