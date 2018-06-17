import {getElementFromTemplate} from './getelement.js';
import {game2Element} from './module-4.js';
import {selectSlide} from './selectSlide';
import {introElement} from './module-0.js';
import {footer} from './footer.js';
import {gameHeader} from './gameHeader.js';
import {getGame} from './game.data';
import {initAnswer} from './answerModel';

const markup = `
  <div class="game">
    <p class="game__task">${getGame().questionsList[0].text}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        ${[...getGame().questionsList[0].answers].map((answer) =>
    `<label class="game__answer game__answer--${answer.textAnswer}">
          <input name="question1" type="radio" value="${answer.textAnswer}">
          <span>${answer.textAnswer}</span>
        </label>`).join(``)}        
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
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
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const game1Element = getElementFromTemplate(gameHeader + markup + footer);

const question1Element = game1Element.querySelectorAll('input[name="question1"]');
const question2Element = game1Element.querySelectorAll('input[name="question2"]');
const game2OptionElement = game1Element.querySelectorAll('div.game__option');


game2OptionElement[1].addEventListener('change', () => {
  if ((question1Element[0].checked || question1Element[1].checked) &&
    (question2Element[0].checked || question2Element[1].checked)){
      alert(getGame().questionsList[0].answers.size);
     selectSlide(game2Element);
  }
});

const buttonBack = game1Element.querySelector("button.back");
buttonBack.addEventListener('click', () => {selectSlide(introElement);});

export {game1Element};
