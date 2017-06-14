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

Board.prototype.threeInARow = function () {
  //determine if there are three in a row
}

function Game() {
  winner = false;

}

$(document).ready(function(){
  var playerX = new Player(true);
  var playerO = new Player(false);

  var board = new Board();
  board.spaces = board.initializeSpaces();
  var game = new Game();

  //game loop
  while(game.winner === false) {
    if(playerX.turn === true) {

      game.winner = board.threeInARow();

    }
  }

  $(".space1").click(function() {
    if(playerX.turn === true) {
      $(".space1").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space1").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space2").click(function() {
    if(playerX.turn === true) {
      $(".space2").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space2").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space3").click(function() {
    if(playerX.turn === true) {
      $(".space3").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space3").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space4").click(function() {
    if(playerX.turn === true) {
      $(".space4").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space4").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space5").click(function() {
    if(playerX.turn === true) {
      $(".space5").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space5").text("O");
      playerO.turn === false;
      playerX.turn === true;
    }
  });
  $(".space6").click(function() {
    if(playerX.turn === true) {
      $(".space6").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space6").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space7").click(function() {
    if(playerX.turn === true) {
      $(".space7").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space7").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space8").click(function() {
    if(playerX.turn === true) {
      $(".space8").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space8").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
  $(".space9").click(function() {
    if(playerX.turn === true) {
      $(".space9").text("X");
      playerO.turn = true;
      playerX.turn = false;
    } else if(playerO.turn === true) {
      $(".space9").text("O");
      playerO.turn = false;
      playerX.turn = true;
    }
  });
});
