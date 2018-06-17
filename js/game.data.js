import {getTimer} from './timerObjectFunction';
import {initQuestion} from './questionModel';
import {initAnswer} from './answerModel';

let game1;

const answer1 = initAnswer('paint', true, 'http://placehold.it/468x458');
const answer2 = initAnswer('photo', false, null);

const answers = new Set([answer1, answer2]);

const question1 = initQuestion(`Угадайте для каждого изображения фото или рисунок?`, answers, null);
const question2 = initQuestion(`Угадай, фото или рисунок?`, answers, null);
const question3 = initQuestion(`Найдите рисунок среди изображений`, answers, null);

const questions = [question1, question2, question3];

const initGame = (playerName) => {
    const game = {
        gameType: 'easy',
        questionsList: questions,
        playerName: '',
        lives: 3,
        gameTimer: getTimer(6)
    };
    return game;
};

const getGame = () => {
    if(game1 == null){
        game1 = initGame();
    }

    return game1;
};

export {initGame};
export {getGame};
export {questions}