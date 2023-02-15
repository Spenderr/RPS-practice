var choiceBtn = document.querySelectorAll('.element');
var playerSBoard = document.getElementById('userScore');
var computerSBoard = document.getElementById('compScore');
var playerScore = 0;
var computerScore= 0;

let player,plyr;
let computer,cmpt;


choiceBtn.forEach(button =>  button.addEventListener("click",() =>                                               
{
    player = button.innerText.toLowerCase();
    computerChoice();
    playRound(player,computerChoice());
}))


function showPlayAgainBox()
{
    document.querySelector('.GO').style.display = "flex";
}


function playingAgain(answer)
{
    if(answer == true)
        location.reload();
}


function computerChoice()
{
     var randonInt = Math.floor(Math.random()*3)+1;
    switch(randonInt)
    {
        case 1: computer = 'rock';
            break;
        case 2: computer = 'scissors';
            break;
        case 3: computer = 'paper';
            break;
    }
    return(computer);
    //console.log(randonInt +" is the number")
    //console.log(computer);
}
//console.log(resultBox.innerText);
function playRound(plyr,cmpt)
{
    if(
       (plyr == 'rock' && cmpt=='rock')||
       (plyr == 'paper' && cmpt=='paper')||
       (plyr == 'scissors' && cmpt=='scissors')
      )
    {
               
    }
    else if((plyr == 'rock' && cmpt == 'scissors')||
           (plyr == 'paper' && cmpt == 'rock')||
           (plyr == 'scissors' && cmpt == 'paper'))
    {
        
        playerScore++;
        console.log(playerScore);
    }
    else
    {
        
        computerScore++;
        console.log(computerScore);
    }
            
    
    if(playerScore == 5)
    {
    document.getElementById("winner").innerText = "YOU WON";
    showPlayAgainBox();
    //confirm("You won the game, Congratulations");
    //location.reload();
    
    }
    else if(computerScore == 5) 
    {
    document.getElementById("winner").innerText = "YOU LOST";   
    showPlayAgainBox();
    }
    
    playerSBoard.innerText = `${playerScore}`;
    computerSBoard.innerText = `${computerScore}`;
    
    document.getElementById('playerChoice').src = player+".png";
    document.getElementById('computerChoice').src = computer+".png";
    console.log(computer);
    
}

