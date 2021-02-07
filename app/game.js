class Game {
  constructor(){
    this.lettersWrapper = document.getElementById("letters")
    this.categoryWrapper =  document.getElementById("category")
    this.wordWrapper =  document.getElementById("word")
    this.outputWrapper = document.getElementById("output")
  }

  start() {
    for(let i = 0; i < 26; i++){
        const label = (i + 10).toString(36)
        const button = document.createElement('button');
        this.lettersWrapper.appendChild(button).textContent = label;
        
    }
  }
}

const game = new Game();

game.start();
