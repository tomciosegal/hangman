import {Quote} from './quote.js'
class Game {
    //easy
    quotes = [{
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
    

  constructor(){
    this.lettersWrapper = document.getElementById("letters")
    this.categoryWrapper =  document.getElementById("category")
    this.wordWrapper =  document.getElementById("word")
    this.outputWrapper = document.getElementById("output")
    const {name, category, level} = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(name);

    }

    guess(letter){

        
        new Audio('/assets/sounds/clicked_button.wav').play()
        this.quote.guess(letter);
        this.drawQuote()
         
    }


    
    drawLetters(){
        for(let i = 0; i < 26; i++){
            const label = (i + 10).toString(36)
            const button = document.createElement('button');
            this.lettersWrapper.appendChild(button).textContent = label.toUpperCase();
            button.addEventListener('click', () => this.guess(label))
            
            
            
        }
    }

    drawQuote(){
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content.toUpperCase();
    }

    start() {
        this.drawLetters();
        this.drawQuote();
    }
}




//<iframe width="1180" height="664" src="https://www.youtube.com/embed/Sk8QzckJvUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const game = new Game();

game.start();
