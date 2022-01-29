const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess: function(){
    console.log("Enter a guess between ${this.smallestNum} and ${this.biggestNum}")
    let guess = 0;
    while (guess < biggestNum && guess > smallestNum){
    }
    return guess;
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

