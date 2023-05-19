const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
  }
  print(){
    let fielsString = '';
    for(let i = 0; this.field.length > i; i++){
      this.field[i].forEach(elem=>fielsString+=elem);
      fielsString+='\n';
    }
    console.log(fielsString);
  }
  generateField(height, width, percentage){
    for (let i = 0; i < height; i++) {
      this.field[i] = [];
  for (let j = 0; j < width; j++) {
    if(i == 0 && j == 0){
        this.field[0][0] = pathCharacter;
        continue; 
      }
      this.field[i][j] = fieldCharacter;
      }
    }
    const elemntsOfPrecentage = ((height*width)*percentage)/100;
    let randomRow = Math.floor(Math.random() * height)
    let randomCol = Math.floor(Math.random() * width)
    for(let i=0; i<elemntsOfPrecentage; i++){
      if (randomRow == 0 && randomCol == 0){
        randomRow = Math.floor(Math.random() * height)
        randomCol = Math.floor(Math.random() * width)
      }
      this.field[randomRow][randomCol] = hole;
      randomRow = Math.floor(Math.random() * height)
      randomCol = Math.floor(Math.random() * width)
    }
      randomRow = Math.floor(Math.random() * height)
      randomCol = Math.floor(Math.random() * width)
      if (randomRow == 0 && randomCol == 0){
        randomRow = Math.floor(Math.random() * height-1)
        randomCol = Math.floor(Math.random() * width-1)
      }
      this.field[randomRow][randomCol] = hat
    }
  }


const myField = new Field([])

function playGame(){
  let colIndex = 0;
  let rowIndex = 0; 
  while(true){
    myField.print();
    let userInput = prompt('Which diraction d - Down, r - Right, l - Left, u - Up:')
    switch(userInput){
      case 'l' || 'L':
          rowIndex -= 1;
          if(colIndex < 0 || rowIndex < 0 || rowIndex >= myField.field[0].length || colIndex >= myField.field.length){
              console.log("Out of the board!")
              process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hole){
            console.log("It is hole!")
            process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hat){
            console.log("You WIN!")
            process.exit()
          }
          myField.field[colIndex][rowIndex] = pathCharacter;
          break;
      case 'r' || 'R':
          rowIndex += 1;
          if(colIndex < 0 || rowIndex < 0 || rowIndex >= myField.field[0].length || colIndex >= myField.field.length){
              console.log("Out of the board!")
              process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hole){
            console.log("It is hole!")
            process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hat){
            console.log("You WIN!")
            process.exit()
          }
          myField.field[colIndex][rowIndex] = pathCharacter;
          break;
      case 'd' || 'D':
          colIndex += 1;
          if(colIndex < 0 || rowIndex < 0 || rowIndex >= myField.field[0].length || colIndex >= myField.field.length){
              console.log("Out of the board!")
              process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hole){
            console.log("It is hole!")
            process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hat){
            console.log("You WIN!")
            process.exit()
          }
          myField.field[colIndex][rowIndex] = pathCharacter;
          break;
      case 'u' || 'U':
          colIndex -= 1;
          if(colIndex < 0 || rowIndex < 0 || rowIndex >= myField.field[0].length || colIndex >= myField.field.length){
              console.log("Out of the board!")
              process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hole){
            console.log("It is hole!")
            process.exit()
          }
          if(myField.field[colIndex][rowIndex] === hat){
            console.log("You WIN!")
            process.exit()
          }
          myField.field[colIndex][rowIndex] = pathCharacter;
          break; 
    }
  }
}
myField.generateField(10,5, 10);
playGame();