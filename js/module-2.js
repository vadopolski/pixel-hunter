import {getElementFromTemplate} from './getelement.js';
import {selectSlide} from './selectSlide';
import {game1Element} from './module-3.js';
import {introElement} from './module-0.js';
import {header} from './header.js';
import {footer} from './footer.js';
import {getGame} from './game-model';

const markup = `<div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя"/>
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const rulesElement = getElementFromTemplate(header + markup + footer);

const rulesButton = rulesElement.querySelector('button.rules__button');
const rulesInput = rulesElement.querySelector('input.rules__input');
const buttonEnabled = () => {
  if (rulesInput.value != '' && rulesInput.value != null ){
    rulesButton.disabled = false;
  }
};

const initPlayer = () => {
  getGame().playerName = rulesInput.value;
  alert(getGame().playerName);
  selectSlide(game1Element);
};

rulesInput.addEventListener("change", buttonEnabled);
rulesButton.addEventListener('click', initPlayer);

const buttonBack = rulesElement.querySelector("button.back");
buttonBack.addEventListener('click', () => {selectSlide(introElement);});

export {rulesElement};