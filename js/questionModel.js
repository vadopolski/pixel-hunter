const initQuestion = (textQuestion, possibleAnswers, time) => {
    const question = {
        text : textQuestion,
        answers : possibleAnswers,
        time : time
    };

    return question;
};

export {initQuestion};