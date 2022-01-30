const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
  //Generates a random number and assigns it to the variable secretNum
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  //Takes the guesses from the player and pushes them to the prevGuesses array while the last guess is NOT equal to secretNum (the random number chosen by computer).
    do {
      this.prevGuesses.push(this.getGuess());
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum)
  },
  //Prompts player to guess and stores that value in playerGuess.
  getGuess: function() {
    let playerGuess 

    do {
      playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }
    while (isNan(playerGuess) || playerGuess >this.biggestNum || playerGuess <this.smallestNum) 

    return playerGuess;
  }
}
