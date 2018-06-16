import {getElementFromTemplate} from './getelement.js';
import {statsElement} from './module-6.js';
import {selectSlide} from './selectSlide';
import {introElement} from './module-0.js';
import {footer} from './footer.js';
import {gameHeader} from './gameHeader.js';


const markup = `
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const game3Element = getElementFromTemplate(gameHeader + markup + footer);
const divGameOptionList = game3Element.querySelectorAll("div.game__option");

divGameOptionList[0].addEventListener('click', () => {selectSlide(statsElement);});
divGameOptionList[1].addEventListener('click', () => {selectSlide(statsElement);});
divGameOptionList[2].addEventListener('click', () => {selectSlide(statsElement);});

const buttonBack = game3Element.querySelector("button.back");
buttonBack.addEventListener('click', () => {selectSlide(introElement);});

export {game3Element};
