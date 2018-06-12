
const getTimer = (timerTimeInSeconds) => {
    const timer = {timerTimeInSeconds : timerTimeInSeconds, leftTimeInSeconds : timerTimeInSeconds};
    return timer;
};

const updateTimer = (timer) => {
    if (timer == null) {
        console.log("timer is null");
        return -1;
    }

    if(timer.leftTimeInSeconds  == 0) {
        console.log("timer is done");
        return -1;
    }

    const newTimer = Object.assign({}, timer, {leftTimeInSeconds : --timer.timerTimeInSeconds})

    return newTimer;
};

export {updateTimer};
export {getTimer};



