export class Quote{
    constructor(name){
        this.name = name;
        this.guessed = [];
    }

    getContent(){
        let content = '';
        
        for(let char of this.name){
            if(char == ' ' || this.guessed.includes(char)){
                content += char;
            }
            else{
                content += '_';
            }
        }
        return content;
    }

    guess(letter){
        if(!this.name.includes(letter)){
            return false;
        }
            this.guessed.push(letter)
            return true;
        }
    }
 
