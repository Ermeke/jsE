var computerSelect = Math.random();
class Game{
  constructor(player,computerSelect){
    this.PlayerChoice = player,
    this.ComputerChoice=computerSelect
    this.winnerScore = [0, 0]
  }

  get getComputerSelect(){
    if (this.ComputerChoice < 0.34) {
      return this.computerSelect = "Камень";
    } else if (this.ComputerChoice <= 0.67) {
     return this.computerSelect = "Бумага";
    } else {
     return this.computerSelect = "Ножницы";
    }
  }

  get Getw(){
    if (this.PlayerChoice === "Камень" && this.computerSelect === "Бумага" || 
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Ножницы' || 
  this.PlayerChoice === 'Ножницы' && this.computerSelect === 'Камень') {
    return this.getwinner="Компьютер";
  }

  if (this.PlayerChoice === "Ножницы" && this.computerSelect === "Бумага" || 
this.PlayerChoice ==="Камень" && this.computerSelect === "Ножницы" ||
  this.PlayerChoice ==="Бумага" && this.computerSelect ==="Камень") {
    return this.getwinner="Игрок";
  } 

  if  (this.PlayerChoice === 'Ножницы'&& this.computerSelect ==="Ножницы" ||
  this.PlayerChoice === 'Камень' && this.computerSelect === 'Камень' ||
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Бумага'){
   return this.getwinner='Ничья';
  } 
}
  get winnerS(){
    if (this.getwinner === "Игрок") {
     return this.winnerScore[0]=+1;
    }
    if (this.getwinner === "Компьютер") {
      return this.winnerScore[1]=+1;
    }
  }
  }

function startGame(){
  const game = new Game(prompt(),Math.random())
  alert(game.getComputerSelect)
  alert(game.Getw)
  alert(game.winnerS)
}


// var winnerScore = [0, 0]
// var computerSelect = Math.floor(Math.random()*18)


// class Gam{
//   constructor(player,computer){
//       this.playerChoice = player
//       this.computerChoice = computer
//       this.winner =  [0,0]
//   }
  
//   get getplay(){
//     if (this.computerChoice < 6) {
//     this.computerSelect = "Камень";
//     } else if (this.computerChoice <= 12) {
//       this.computerSelect = "Бумага";
//     } else {
//       this.computerSelect = "Ножницы";
//     }
//     return  this.computerSelect
//    }
//    get compares(){
//     if (this.playerChoice === "Камень" && this.computerSelect === "Бумага") {
//       return this.compare="Компьютер";}
//      else if (this.playerChoice === "Бумага" && this.computerSelect === "Ножницы") {
//       return this.compare="Компьютер";}
//      else if (this.playerChoice === "Ножницы" && this.computerSelect === "Камень") {
//       return this.compare="Компьютер";
//     }else if(this.playerChoice === this.computerSelect){
//       return this.compare = "Ничья"
//     }else{
//       return this.compare = "Игрок"
//     }
//    }

//    get checkWinner(){
//     if (this.compare === "Игрок") {
//       this.winner[0]++
//     }else if (this.compare === "Компьютер") {
//       this.winner[1]++;
//     } else if (this.compare === "Ничья" ) {
//       this.winner[0]++;
//       this.winner[1]++;
//     }
//    }

// }
 
// const btn = document.querySelector('button')
// const h2node = document.querySelector('h2')
// const h3ode = document.querySelector('h3')
// const h4node = document.querySelector('h4')
// function StartGame(){
//   let game =  new Gam(prompt(),computerSelect)
//   alert(`выбрал комп: ${game.getplay}`)
//   h2node.innerHTML = game.getplay
//   alert(`выиграл ${game.compares}`)
//   h3ode.innerHTML = game.compares
//   console.log(game.checkWinner)
//   h4node.innerHTML= game.winner 
//   alert(game.winner)
// }

// btn.addEventListener('click',StartGame)









