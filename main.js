const settings = {
    min: 0,
    max: 100,
    attemptsNumber: 10,
    randomNumber: getRandomNumber(),
    playerName: getPlayerName()
};

function getRandomNumber() {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
};

function getPlayerName() {
   const playerName = prompt(`What's your name?`, '');
   return playerName;
};

function game(min, max, attemptsNumber, randomNumber, playerName) {
    alert(`Hello ${playerName}!
    I guessed a number from ${min} to ${max}!
    You have ${attemptsNumber} attempts.
    Let's go?`);

    let answersNumber = [];

    for (let attempt = 1; attempt <= attemptsNumber; attempt++) {
        const playerAnswer = +prompt('What a number did I guess?', '');

        if (playerAnswer > randomNumber) {
            alert(`My number is less! You have ${attemptsNumber - attempt} attempts left`);
            answersNumber.push(playerAnswer)
        } else if (playerAnswer < randomNumber) {
            alert(`My number is more! You have ${attemptsNumber - attempt} attempts left`);
            answersNumber.push(playerAnswer)
        } else {
            alert('Congratulations! You guessed a number!');
            return
        }
    }

    alert(`Oops! You didn't guess a number!
    The numbers you entered: ${answersNumber}
    And I guessed - ${randomNumber}`);
};

const {
    max, min, attemptsNumber, randomNumber, playerName
} = settings;

game(min, max, attemptsNumber, randomNumber, playerName);