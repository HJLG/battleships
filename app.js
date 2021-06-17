const game = {
  boards: {
    board1: [
      [2, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 2],
    ],
    board2: [
      [2, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 2],
    ],
  },

  counter1: 0,
  counter2: 0,
};

const reset = () => {
  $("#reset").click(() => location.reload());
};

let turn = 1;

const playerTurn = () => {
  if (turn === 1) {
    turn = turn + 1;
    $(".playerturn").text(turn);
    console.log("1", turn);
  } else if (turn === 2) {
    turn = turn - 1;
    $(".playerturn").text(turn);
    console.log("2", turn);
  }
};

// randomise ships
game.boards.board1.sort(() => Math.random() - 0.5);
game.boards.board2.sort(() => Math.random() - 0.5);
console.log(game.boards.board1);
console.log(game.boards.board2);

const render = () => {
  for (let i = 0; i < game.boards.board1.length; i++) {
    for (let j = 0; j < game.boards.board1[i].length; j++) {
      if (game.boards.board1[i][j] === 1) {
        $(`#${i}${j}`).css({
          background: "url(/images/ship.jpeg)",
          "background-size": "100% 100%",
          "background-repeat": "no-repeat",
        });
      }
      if (game.boards.board1[i][j] < 0) {
        $(`#${i}${j}`).css({
          background: "url(/images/splash.jpeg)",
          "background-size": "100% 100%",
          "background-repeat": "no-repeat",
        });
      }
    }
  }
};
const render2 = () => {
  for (let k = 0; k < game.boards.board2.length; k++) {
    for (let p = 0; p < game.boards.board2[k].length; p++) {
      if (game.boards.board2[k][p] === 1) {
        $(`#0${k}${p}`).css({
          background: "url(/images/ship.jpeg)",
          "background-size": "contain",
        });
      }
      if (game.boards.board2[k][p] < 0) {
        $(`#0${k}${p}`).css({
          background: "url(/images/splash.jpeg)",
          "background-size": "100% 100%",
          "background-repeat": "no-repeat",
        });
      }
    }
  }
};

const main = () => {
  //   console.log("loaded");
  // console.log(game.boards.board1)
  const $board1 = $(".board1");

  // Creating the board 1
  for (let row = 0; row < 4; row++) {
    const $row = $("<div>").addClass("row"); //creating the row
    $board1.append($row);
    for (let column = 0; column < 4; column++) {
      //columns
      const $square = $("<div>")
        .addClass("square")
        .attr("row", row)
        .attr("col", column)
        .attr("id", "" + row + ("" + column)); //creating a div called square inside the row
      $row.append($square);
    }
  }
  // Creating the board 2
  const $board2 = $(".board2");
  for (let row = 0; row < 4; row++) {
    const $row = $("<div>").addClass("row"); //creating the row
    $board2.append($row);
    for (let column = 0; column < 4; column++) {
      //columns
      const $square = $("<div>")
        .addClass("square2")
        .attr("row", row)
        .attr("col", column)
        .attr("id", "0" + row + ("" + column)); //creating a div called square inside the row
      $row.append($square);
    }
  }
  const changeValue = (event) => {
    if (turn === 1) {
      const getRow = $(event.currentTarget).attr("row");
      const getCol = $(event.currentTarget).attr("col");
      game.boards.board1[getRow][getCol] =
        game.boards.board1[getRow][getCol] - 1;
      if (game.boards.board1[getRow][getCol] === 1) {
        game.counter1 += 1;
      }
      playerTurn();
      // $(".square").off("click");
      // $(".square2").on("click",changeValue2);
      setTimeout(gameOver);
      render();
      render2();
    }
  };

  const changeValue2 = (event) => {
    if (turn === 2) {
      const getRow = $(event.currentTarget).attr("row");
      const getCol = $(event.currentTarget).attr("col");
      game.boards.board2[getRow][getCol] =
        game.boards.board2[getRow][getCol] - 1;
      if (game.boards.board2[getRow][getCol] === 1) {
        game.counter2 += 1;
      }
      playerTurn();
      // $(".square2").off("click");
      // $(".square").on("click", changeValue);
      setTimeout(gameOver);
      render();
      render2();
    }
  };

  const gameOver = () => {
    if (game.counter1 === 4) {
      alert("player 1 win");
    } else if (game.counter2 === 4) {
      alert("player 2 win");
    }
  };
  $(".square").on("click", changeValue);
  $(".square2").on("click", changeValue2);
  reset()
};

$(main);
