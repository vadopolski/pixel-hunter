/**
 * Created by Home on 12.06.2018.
 */

import {updateTimer, getTimer} from './timerFunction.js';
import {assert} from 'chai';


const actualTimer = getTimer(5);

describe(`#getTimer()`, () => {
    it(`should return timer object with 5 seconds remain time and timer time in seconds = 5`, () => {
        assert.equal(5, actualTimer.timerTimeInSeconds);
        assert.equal(5, actualTimer.leftTimeInSeconds);
    });
});

describe(`#updateTimer()`, () => {
    it(`should return timer object with 4 seconds remain time and timer time in seconds = 4`, () => {
        assert.equal(4, updateTimer(actualTimer).leftTimeInSeconds);
    });
});

// describe(`#updateTimer()`, () => {
//     it(`should return -1 when  the timer is done`, () => {
//         assert.equal(-1, updateTimer(updateTimer(updateTimer(actualTimer))).leftTimeInSeconds);
//     });
// });