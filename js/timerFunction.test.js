//import {updateTimer, getTimer} from './timerFunction.js';
import {assert} from 'chai';
import {getTimer} from './timerObjectFunction';


describe(`#getTimer()`, () => {
    it(`should return timer object with 5 seconds remain time and left times 5, 4, 3, 2, 1, 0 and 'time is end'`, () => {
        const initTimeInSeconds = 5;

        const actualTimer = getTimer(initTimeInSeconds);

        assert.equal(5, actualTimer.leftTimes);
        assert.equal(4, actualTimer.tick());
        assert.equal(3, actualTimer.tick());
        assert.equal(2, actualTimer.tick());
        assert.equal(1, actualTimer.tick());
        assert.equal(0, actualTimer.tick());
        assert.equal('time is end', actualTimer.tick());
    });
});