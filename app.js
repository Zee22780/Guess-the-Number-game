const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  playerGuess: null,
  getGuess: function(){
    console.log(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    while (this.playerGuess < this.biggestNum && this.playerGuess > this.smallestNum && typeof this.playerGuess === "number"){
      return this.playerGuess;
    }
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    while () {
    game.getGuess();
    }
    this.prevGuesses.push([]);
      }
  }

