function guessNumber() {
    //on déclare une variable qui contient le nombre choisi par le joueur
    let playerGuess;

    //on déclare une variable qui contient le nombre à deviner
    const numberToGuess = Math.ceil(Math.random() * 10);
    //on invite le joueur à choisir un nombre en le tapant dans une boite de dialogue
    prompt("Devinez le nombre entre 1 et 10 inclus");

    while (playerGuess != numberToGuess) {
        prompt('Echec ! essayez à nouveau de deviner le nombre');
    }



    alert(`Bravo ! Le nombre était ${numberToGuess}!`)
}

guessNumber();