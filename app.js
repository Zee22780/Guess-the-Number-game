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
      this.render();
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum);
  },

  // getGuess function is called to prompt player to guess a number and stores that value in playerGuess.
  getGuess: function() {
    let playerGuess;

  //Changes the players guess from a string to an integer and then confirms its a number and compares it to biggestNum and smallestNum to ensure it's within the appropriate range. Then returns the player's guess.
    do {
      playerGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }
    while (isNaN(playerGuess) || playerGuess >this.biggestNum || playerGuess <this.smallestNum);
    return playerGuess;
  },

  render: function() {
    if(this.prevGuesses[this.prevGuesses.length -1] === this.secretNum){
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`);
    } else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
      alert(`Too high! Previous guesses: ${this.prevGuesses.join()}`);
    } else {
      alert(`Too low! Previous guesses: ${this.prevGuesses.join()}`);
    }
  },
}
game.play()




