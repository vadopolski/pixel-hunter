const initAnswer = (textAnswer, isRight, pictureLink) => {
    const answer = {
        textAnswer : textAnswer,
        isRight : isRight,
        pictureLink : pictureLink
    }

    return answer;
};

export {initAnswer}