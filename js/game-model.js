import {getTimer} from './timerObjectFunction';

let game1;

const initGame = (playerName) => {
    const game = {
        gameType: 'easy',
        questionsList: new Array().fill(`111`).join(``),
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