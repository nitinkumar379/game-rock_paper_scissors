let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
let options = ["rock", "paper", "scissors"];
const randidx = Math.floor(Math.random()*3);
return options[randidx];
};

const drawGame = () =>{
    console.log("Gamme was draw !");
    msg.innerText = "Game was draw Play again!";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin, userchoice, compChoice ) =>{
if (userWin){
    userScore++;
    userscorePara.innerText = userScore;
    msg.innerText = `you are winner ! ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    compscorePara.innerText = compScore;
    msg.innerText = `you are loser ! ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
}
};

const playGame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    //generate  computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice); 
    if (userchoice === compChoice){
        ///draw game
        drawGame();
    } else{
        let userWin = true;
        if (userScore === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       playGame(userchoice);

    });
});
/// 8:22:33