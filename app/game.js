const getQuotes = () => [{
    name: 'Superman',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Ironman',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Spiderman',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Batman',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Terminator',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Gollum',
    category: 'movie characters',
    level: 'easy'
},

{
    name: 'Neymar',
    category: 'athletes',
    level: 'easy'
},

{
    name: 'Pele',
    category: 'athletes',
    level: 'easy'
},

{
    name: 'Maradona',
    category: 'athletes',
    level: 'easy'
},

{
    name: 'Ronaldo',
    category: 'athletes',
    level: 'easy'
},

{
    name: 'Novak Djoković',
    category: 'athletes',
    level: 'easy'
},

{
    name: 'LeBron James',
    category: 'athletes',
    level: 'easy'
},

    // level medium
{
    name: 'Harry Potter',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Tony Montana',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Wolverine',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Captain America',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Yoda',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Gandalf',
    category: 'movie characters',
    level: 'medium'
},

{
    name: 'Usain Bolt',
    category: 'athletes',
    level: 'medium'
},

{
    name: 'Lionel Messi',
    category: 'athletess',
    level: 'medium'
},

{
    name: 'Michael Phelps',
    category: 'athletes',
    level: 'medium'
},

{
    name: 'Roger Federer',
    category: 'athletes',
    level: 'medium'
},

{
    name: 'Manny Pacquiao',
    category: 'athletes',
    level: 'medium'
},

{
    name: 'Muhammad Ali',
    category: 'athletes',
    level: 'medium'
},

//level hard

{
    name: 'John McClane',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Indiana Jones',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Luke Skywalker',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Vito Corleone',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Sarah Connor',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Ace Ventura',
    category: 'movie characters',
    level: 'hard'
},

{
    name: 'Michael Jordan',
    category: 'athletes',
    level: 'hard'
},

{
    name: 'Tiger Woods',
    category: 'athletes',
    level: 'hard'
},

{
    name: 'Michael Schumacher',
    category: 'athletes',
    level: 'hard'
},

{
    name: 'Pete Sampras',
    category: 'athletess',
    level: 'hard'
},

{
    name: 'Wayne Gretzky',
    category: 'athletes',
    level: 'hard'
},

{
    name: 'Jesse Owens',
    category: 'athletes',
    level: 'hard'
},
]

class Quote{
    constructor(text){
        this.text = text;
        this.wordWrapper =  document.getElementById("word");
        this.imageIndex = 0;
        this.images = document.querySelectorAll('.step');
        this.alertDiv = document.querySelector('#alert')
        this.playAgain = document.querySelector('#play');
        this.playAgain.addEventListener('click', () => location.reload())
        this.lettersWrapper = document.getElementById("letters")
    }

    checkLetter = (e) =>{
        new Audio('assets/sounds/clicked_button.wav').play()
         e.target.disabled = true;

         const letter = e.target.textContent.toLowerCase();
         let popTime = 0;
         let foundLetter = false; 

         const textArray = [...this.wordWrapper.textContent]; 
         for(let i = 0; i < this.text.length; i++){
             if(this.text[i].toLowerCase() == letter){
                 foundLetter = true;

                 popTime += 300;
                
                 setTimeout( () => {
                    textArray[i] = this.text[i];
                    new Audio('assets/sounds/pop_letter.mp3').play();
                    this.wordWrapper.textContent = textArray.join('');

                    if(this.wordWrapper.textContent.indexOf('_') === -1){
                        this.alertDiv.prepend('You Win')
                        this.alertDiv.classList.add('win')
                        this.alertDiv.classList.toggle('hidden')
                        new Audio('assets/sounds/loose_will_kill_you.wav').play()
                    }
          
                 }, popTime)
                 
            }
         }
         
         if(foundLetter == false){
             if(this.images[this.imageIndex - 1] != undefined){
                 this.images[this.imageIndex - 1].style.opacity = 0.1
             }
           
             this.images[this.imageIndex].style.opacity = 1;
             this.imageIndex++;
             new Audio('assets/sounds/no_letter.mp3').play()
             
             if(this.images[this.imageIndex] == undefined){
                this.alertDiv.prepend('You Lost');
                this.alertDiv.classList.add('lose')
                this.lettersWrapper.style.display = 'none'
                this.alertDiv.classList.toggle('hidden')
                new Audio('assets/sounds/loose_game.wav').play()
                
             }
         }
    }

    
}

class Hangman{
     constructor(){
        this.lettersWrapper = document.getElementById("letters")
        this.categoryWrapper =  document.getElementById("category")
        this.wordWrapper =  document.getElementById("word")
        this.outputWrapper = document.getElementById("output")
        this.quotes = getQuotes();
        this.select = document.querySelector('#level');
        this.select.addEventListener('change', this.selectLevel)
     
     }

     selectLevel = (e) =>{
        const selectedQuote = this.quotes.filter(val => val.level == e.target.value);

        const {name, category, level} = selectedQuote[ Math.floor(Math.random() * selectedQuote.length)];

        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(name);
        this.drawLetters();
        this.drawQuote();
        this.select.parentNode.style.display = 'none'
        const entireSection = document.querySelector('#hangman')
        entireSection.style.opacity = '1'
        entireSection.style.pointerEvents = 'auto'
        new Audio('assets/sounds/wanna_play_game.mp3').play();
        
     }

     drawLetters(){
         for(let i = 0; i < 26; i++){
             const letter = (i+10).toString(36)
             const button = document.createElement('button')
             button.innerHTML = letter.toUpperCase()
             this.lettersWrapper.appendChild(button);
             button.addEventListener('click', this.quote.checkLetter)

         }
     }

     drawQuote(){
         for(let txt of this.quote.text){
             if(txt == ' '){
                 this.wordWrapper.innerHTML += ' '
             }
             else{
                 this.wordWrapper.innerHTML += '_'
             }
         }
     }


 }

 

const hangman = new Hangman();


 

