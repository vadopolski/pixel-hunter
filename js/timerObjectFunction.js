/**
 * Created by Home on 14.06.2018.
 */
const getTimer = (initTimeInseconds) => {
    const timer = {
        leftTimes: initTimeInseconds,
        tick() {
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