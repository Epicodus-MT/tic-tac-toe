function Player(turn) {
  type = "X";
  this.turn = turn;
}

function Space(row, column) {
  type = "";
  empty = true;
  this.row = row;
  this.column = column;
}

function Board() {
  var counter = 0;
  var spaces = [];
}

Board.prototype.initializeSpaces = function() {
  var spaces = [];
  for (var r = 0; r < 3; r++) {
    for (var c= 0; c < 3; c++) {
      var space = new Space(r, c);
      spaces.push(space);
    }
  }
  return spaces;
}

function Game() {
  winner = false;
}

$(document).ready(function(){
  var player1 = new Player(true);
  var player2 = new Player(false);

  var board = new Board();
  board.spaces = board.initializeSpaces();
  var game = new Game();

  //game loop


});
