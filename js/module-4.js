import {getElementFromTemplate} from './getelement.js';
import {game3Element} from './module-5.js';
import {selectSlide} from './selectSlide';
import {introElement} from './module-0.js';
import {footer} from './footer.js';
import {gameHeader} from './gameHeader.js';
import {getGame} from './game.data';

const markup = `<div class="game">
    <p class="game__task">${getGame().questionsList[1].text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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

const game2Element = getElementFromTemplate(gameHeader + markup + footer);
const gameOptionForm = game2Element.querySelector('div.game__option');
const question1Element = game2Element.querySelectorAll('input[name="question1"]');

gameOptionForm.addEventListener('change', () => {
  if (question1Element[0].checked || question1Element[1].checked) {
    selectSlide(game3Element);
  }
});

const buttonBack = game2Element.querySelector("button.back");
buttonBack.addEventListener('click', () => {selectSlide(introElement);});

export {game2Element};
