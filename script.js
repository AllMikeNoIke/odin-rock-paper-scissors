const playRound = (userSelection, blueSelection) => {
    if (userSelection === blueSelection) {
        result.textContent = `It's a draw! You: ${userScore}, Blue: ${blueScore}`;
    } else if (userSelection === "Charmander" && blueSelection === "Bulbasaur" || userSelection === "Squirtle" && blueSelection === "Charmander" || userSelection === "Bulbasaur" && blueSelection === "Squirtle") {
        result.textContent = `Enemy ${blueSelection} fainted! You: ${++userScore}, Blue: ${blueScore}`;
    } else {
        result.textContent = `${userSelection} fainted! You: ${userScore}, Blue: ${++blueScore}`;
    }

    if (userScore === 5) {
        result.textContent = `You defeated Blue!`;
        userScore = 0;
        blueScore = 0;
    } else if (blueScore === 5) {
        result.textContent = `You blacked out!`
        userScore = 0;
        blueScore = 0;
    }
};

const bluePlay = () => {
    const starters = ["Charmander", "Squirtle", "Bulbasaur"];
    return starters[Math.floor(Math.random() * 3)];
};

const starters = document.querySelectorAll('.starter button');
const result = document.querySelector('.result');
let userScore = 0;
let blueScore = 0;

starters.forEach(starter => starter.addEventListener('click', event => playRound(event.target.alt, (bluePlay)())));



