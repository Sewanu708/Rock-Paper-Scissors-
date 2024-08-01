    // Function
    let score = JSON.parse(localStorage.getItem('score'));

    score = score? score:{wins:0, losses:0 , tie:0};



     function pickcomputerMove(){
        const randomNumber=Math.random();
        let computerMove ='';

        if (randomNumber>0 && randomNumber <1/3) {
            computerMove='Rock';
        }
        else if (randomNumber >= 1/3 && randomNumber > 2/3){
            computerMove='Paper';
        } 
        else {
            computerMove='Scissors';
        }
        return computerMove
     };

    function yourmove(move){
        let result = '';
        const computerMove = pickcomputerMove();

        if (move==='Scissors'){
            if (computerMove ==='Rock') {
            result = 'You lose';
            }
            else if (computerMove=== 'Paper'){
                result = 'You win';
            }
            else {
                result ='Tie.';
            }

        }
        else if (move === 'Paper'){
            if (computerMove ==='Rock') {
                result = 'You win';
            }
            else if (computerMove === 'Paper'){
                result= 'Tie';
            }
            else {
                result ='You lose';
            } 

            }

        else if (move === 'Rock'){
            if (computerMove ==='Rock') {
                result = 'Tie';
            }
            else if (computerMove === 'Paper'){
                result= 'You lose';
            }
            else {
                result ='You win';
        }

        };
        if (result === 'You win'){
            score.wins+=1; 
        } else if (result === 'You lose'){
            score.losses+=1; 
        } else {
            score.tie +=1;
        }
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('.output').innerText = `${result}`;
        document.querySelector('.score').innerText = `Won: ${score.wins}   losses: ${score.losses}  Tie: ${score.tie} `;
        document.querySelector('.moves').innerHTML = `You picked <img src="./images/${move.toLowerCase()}-emoji.png"> Computer picked <img src="./images/${computerMove.toLowerCase()}-emoji.png" alt="">`;
        
        
    };

    function reset(){
        const buttonText = document.querySelector('.reset');
        {
            if (buttonText.innerText === 'New Game') {
                document.querySelector('.reset').innerText = "Reset";
     
         
            } else if (buttonText.innerText === "Reset") {
                document.querySelector('.reset').innerText = "New Game";
                document.querySelector('.score').innerText = `Score`;
                document.querySelector('.moves').innerText = "Moves...";
                document.querySelector('.output').innerText = "Result...";
                
            }
        }
    }
    function reset2(){
        document.querySelector('.reset').innerText = "Reset";

    }

    function reset3(){
        
    }