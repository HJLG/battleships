const game = {
  boards: {
    board1: [
      [0, 0, 0, 2],
      [0, 0, 2, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
    ],
    board2: [
      [2, 0, 0, 0],
      [0, 2, 0, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 2],
    ],
  },

  counter: 0,
};

const render = () => {
  for (let i = 0; i < game.boards.board1.length; i++) {
    for (let j = 0; j < game.boards.board1[i].length; j++) {
      if (game.boards.board1[i][j] === 1) {
        $(`#${i}${j}`).css("background-color", "red");
      }
      if (game.boards.board1[i][j] < 0) {
        $(`#${i}${j}`).css("background-color", "white");
      }
    }
  }
};
const render2 = () => {
  for (let k = 0; k < game.boards.board2.length; k++) {
    for (let p = 0; p < game.boards.board2[k].length; p++) {
      if (game.boards.board2[k][p] === 1) {
        $(`#0${k}${p}`).css("background-color", "red");
      }
      if (game.boards.board2[k][p] < 0) {
        $(`#0${k}${p}`).css("background-color", "white");
      }
    }
  }
};
console.log(game.boards.board1.length);

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
    const getRow = $(event.currentTarget).attr("row");
    const getCol = $(event.currentTarget).attr("col");
    game.boards.board1[getRow][getCol] = game.boards.board1[getRow][getCol] - 1;
    render();
    render2();
  };

  const changeValue2 = (event) => {
    const getRow = $(event.currentTarget).attr("row");
    const getCol = $(event.currentTarget).attr("col");
    game.boards.board2[getRow][getCol] = game.boards.board2[getRow][getCol] - 1;
    render();
    render2();
  };

  $(".square").on("click", changeValue);
  $(".square2").on("click", changeValue2);
};
render();
$(main);
