/**
 * Created by Home on 14.06.2018.
 */
const getTimer = (initTimeInSeconds) => {

    const timer = {
        leftTimes: initTimeInSeconds,
        tick: function() {
            if (this.leftTimes > 0) {
                return --this.leftTimes;
            } else {
                return 'time is end';
            }
        }
    };

    return timer;
};

export {getTimer};