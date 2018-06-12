import {assert} from 'chai';
import {answersAreNotAllTrue, answersAreLessThan10, answersWithoutSlowAndFast,
    answersWithSlowAndFast, answersWithoutSlowAndWithFast, answersWithSlowAndWithoutFast} from './answers.data.js';
import {scoreInTheEnd} from './scoreFunction.js'

const failExpectedValue = -1;

describe(`#scoreInTheEnd()`, () => {
    it(`should return -1 when the answers length are less than 10`, () => {
        assert.equal(failExpectedValue, scoreInTheEnd(answersAreLessThan10, 10));
    });
});

describe(`#scoreInTheEnd()`, () => {
    it(`should return -1 when the right answers are less than 10`, () => {
        assert.equal(failExpectedValue, scoreInTheEnd(answersAreNotAllTrue, 10));
    });
});

describe(`#scoreInTheEnd()`, () => {
    it(`should return 1150 when the right answers equal 10 and  time is not fast or slow`, () => {
        assert.equal(1150, scoreInTheEnd(answersWithoutSlowAndFast, 10));
    });
});

describe(`#scoreInTheEnd()`, () => {
    it(`should return 1100 when the right answers equal 10 and time answer fast, slow and middle`, () => {
        assert.equal(1100, scoreInTheEnd(answersWithSlowAndFast, 10));
    });
});

describe(`#scoreInTheEnd()`, () => {
    it(`should return 1200 when the right answers equal 10 and time answer is fast and is not slow`, () => {
        assert.equal(1250, scoreInTheEnd(answersWithoutSlowAndWithFast, 10));
    });
});

describe(`#scoreInTheEnd()`, () => {
    it(`should return 1200 when the right answers equal 10 and time answer is fast, slow and middle`, () => {
        assert.equal(1000, scoreInTheEnd(answersWithSlowAndWithoutFast, 10));
    });
});