const game = () => {
  document.querySelector('.buttons').style.display = 'flex'
  document.querySelector('.popUp').style.display = "none";

  // document.getElementById('numberP').setAttribute('src', './img/Zero.glb')
  // document.getElementById('number').setAttribute('src', './img/Zero.glb')

  let pScore = 0;
  let cScore = 0;

  console.log(pScore)
  console.log(cScore)

  const playMatch = () => {
    const options = document.querySelectorAll(".buttons button");
    const computerOptions = ["paper", "scissors", "rock"];

    options.forEach(options => {
      options.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);

        let name = options.name;
        const computerChoice = computerOptions[computerNumber];

        if (computerNumber === 0) {
          document
            .getElementById("choice")
            .setAttribute("src", "./img/Paper.glb");
        } else if (computerNumber === 1) {
          document
            .getElementById("choice")
            .setAttribute("src", "./img/Scissors.glb");
        } else if (computerNumber === 2) {
          document
            .getElementById("choice")
            .setAttribute("src", "./img/Rock.glb");
        }
        compareHands(name.toLowerCase(), computerChoice);
      });
    });
  };

  const updateScore = () => {
    console.log(`Player: ${pScore}`)
    console.log(`Computer: ${cScore}`)

    if (pScore === 0) {
      document.getElementById('numberP').setAttribute('src', './img/Zero.glb')
      console.log(`p0? ${pScore}`)
    } else if (pScore === 1) {
      document.getElementById('numberP').setAttribute('src', './img/One.glb')
      console.log(`p1? ${pScore}`)
    } else if (pScore === 2) {
      document.getElementById('numberP').setAttribute('src', './img/Two.glb')
      console.log(`p2? ${pScore}`)
    } else if (pScore === 3) {
      console.log(`p3? ${pScore}`)
      document.getElementById('numberP').setAttribute('src', './img/Three.glb')
      document.getElementById('choice').setAttribute('src', './img/Victory.glb')
      document.querySelector('.buttons').style.display = "none";
      document.querySelector('.popUp').style.display = "flex";

      // document.getElementById('replayBtn').addEventListener('click', game)

      pScore = 0
      cScore = 0

      return;
    }

    if (cScore === 0) {
      document.getElementById('numberC').setAttribute('src', './img/Zero.glb')
      console.log(`c0? ${cScore}`)
    } else if (cScore === 1) {
      document.getElementById('numberC').setAttribute('src', './img/One.glb')
      console.log(`c1? ${cScore}`)
    } else if (cScore === 2) {
      document.getElementById('numberC').setAttribute('src', './img/Two.glb')
      console.log(`c2? ${cScore}`)
    } else if (cScore === 3) {
      console.log(`c3? ${cScore}`)
      document.getElementById('numberC').setAttribute('src', './img/Three.glb')
      document.getElementById('choice').setAttribute('src', './img/Victory.glb')
      document.querySelector('.buttons').style.display = "none";
      document.querySelector('.popUp').style.display = "flex";

      // document.getElementById('replayBtn').addEventListener('click', game)

      pScore = 0
      cScore = 0

      return;
    }
    // const playerScore = document.querySelector(".player-score");
    // const computerScore = document.querySelector(".computer-score");

    // playerScore.textContent = pScore;
    // computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    // const winner = document.querySelector(".winner");
    console.log("Computer: ", computerChoice);
    console.log("Player: ", playerChoice);
    if (playerChoice === computerChoice) {
      // winner.textContent = "It is a tie!";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        // winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        // winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        // winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      } else {
        // winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        // winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        // winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();
};

game();