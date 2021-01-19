const messages = {
  "start": "Please check the board to start",
  "progress": "Have fun",
  "win": "You win!",
  "draw": "Love and peace!",
  "lose": "Try again"
}

const useTicGameEngine = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  let states = {
    board: ["X", " ", " ", "O", " ", "X", "X", "O", "O"],
    status: "start",
    player: "X", // (X, O)
    points: 0
  }

  const play = (index) => {
    states.status = "progress"
    if (states.board[index] == " ") {
      states.board[index] = states.player;
      checkGameStatus();
    }
  }

  function checkGameStatus() {
    // check if anyone win
    const score = checkWinStatus();
    if (score == 100) {
      states.status = "win";
      return
    } else if (score == -100) {
      states.status = "lose"
      return
    } else if (score == 0) {
      states.status = "draw"
      return
    }

    if (states.player == "X") {
      states.player = "O";
      let xx = findBestMove();
      play(xx);
    } else {
      states.player = "X";
    }
  }

  function checkWinStatus(board = states.board, player = states.player) {

    // check game winner
    let winner = null;
    winConditions.some(condition => {
      const res =  condition.every(index => board[index] == board[condition[0]] && board[index] !== " ");
      if(res){
        winner = board[condition[0]]
      }
    })
    
    if(winner == "X") {
      return 100
    }else if(winner == "O") {
      return -100;
    }

    // isDraw
    if (board.every(x => x != " ")) {
      return 0
    }

  }

  function findBestMove(board = states.board, player = states.player, depth = 0) {
    const score = checkWinStatus(board, player);
    console.log(depth, board, score, player)
    if (score == 100) {
      return score - depth
    } else if (score == -100) {
      return -100 + depth
    } else if (score == 0) {
      return 0
    }

    if (depth > 2) {
      return 0
    }
    // maximizing score
    if (player == "X") {
      let best = -100;
      board.forEach((cell, index) => {
        if (cell == " ") {
          const newboard = board.slice();
          newboard[index] = "X";
          const val = findBestMove(newboard, "O", depth + 1);
          best = Math.max(best, val);
        }
      })
      return best

    } else {
      let best = 100;
      let bestMove = null;
      board.forEach((cell, index) => {
        if (cell == " ") {
          const newboard = board.slice();
          newboard[index] = "O";
          const val = findBestMove(newboard, "X", depth + 1);
          if (val <= best) {
            bestMove = index;
            best = val;
          }
        }
      })

      if (depth == 0) {
        if (bestMove !== null) {
          return bestMove
        } else {
          return board.findIndex(x => x == " ")
        }
      }
      return best
    }

  }

  function reset() {
    states.board = Array(9).fill(" ");
    states.status = "start";
    states.player = "X"
  }

  // make observerable
  let callback = () => { };

  function stateChange(fn) {
    callback = fn
  }

  states = new Proxy(states, {
    set: (target, prop, value) => {
      target[prop] = value;
      callback(target, prop, value)
      return true
    }
  })

  return {
    states,
    play,
    reset,
    stateChange
  }
}


function Game(el) {
  const board = el.querySelector(".tic__board");
  const reset_btn = el.querySelector(".tic__reset_btn");
  const cells = el.querySelectorAll(".tic__board__cell");
  const message = el.querySelector(".tic__message");

  const {
    states,
    play,
    reset,
    stateChange
  } = useTicGameEngine();



  const render = (states, prop = null, value = null) => {
    // update board
    Array.prototype.forEach.call(cells, (cell, index) => cell.innerHTML = states.board[index]);

    message.innerHTML = messages[states.status];
  }


  // play
  board.addEventListener("click", (e) => {
    if (states.status == "start" || states.status == "progress") {
      const cell = e.target;
      const index = cell.getAttribute("data-index");
      play(index - 1)
    } else {
      reset()
    }
  });

  reset_btn.addEventListener("click", reset);

  // connect to state
  stateChange(render);

  return render(states)

}


const game = new Game(document.querySelector(".tic"))
