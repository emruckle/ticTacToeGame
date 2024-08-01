class miniBoard {
    constructor() {
        this.board = [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
        this.winner = null;
    }
}

const rowColToNum = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]

const miniBoard0 = new miniBoard();
const miniBoard1 = new miniBoard();
const miniBoard2 = new miniBoard();
const miniBoard3 = new miniBoard();
const miniBoard4 = new miniBoard();
const miniBoard5 = new miniBoard();
const miniBoard6 = new miniBoard();
const miniBoard7 = new miniBoard();
const miniBoard8 = new miniBoard();

const megaBoard = [
    miniBoard0,
    miniBoard1,
    miniBoard2,
    miniBoard3,
    miniBoard4,
    miniBoard5,
    miniBoard6,
    miniBoard7,
    miniBoard8
]

const moveStack = [];

var whichTurn = 1;
var currentBoard = null;
var lastMoveBoard = null;
var lastMoveRowCol = null;
var lastMoveHTMLId = null;
var game = true;

function turn(board,row,col) {
    if ((currentBoard != null && board != currentBoard) || game == false) {
       return;
    }
    if (megaBoard[board].board[row][col] == "") {
        moveStack.push(String(board)+String(row)+String(col));
        if (whichTurn % 2 == 0) {
            playerText();
            document.getElementById("mini-flex-cell"+board+rowColToNum[row][col]).innerHTML = "O";
            document.getElementById("mini-flex-cell"+board+rowColToNum[row][col]).style.color = "#084B83";
            megaBoard[board].board[row][col] = "O";
        }
        else {
            playerText();
            document.getElementById("mini-flex-cell"+board+rowColToNum[row][col]).innerHTML = "X";
            document.getElementById("mini-flex-cell"+board+rowColToNum[row][col]).style.color = "#FF66B3"
            megaBoard[board].board[row][col] = "X";
        }
        whichTurn++;
        if (megaBoard[board].winner == null) {
            winCheck(megaBoard[board]);
        }
        if (megaBoard[board].winner == "X") {
            document.getElementById("mini-flex-board"+board).style.background = "#F5E6E8";
        }
        else if (megaBoard[board].winner == "O") {
            document.getElementById("mini-flex-board"+board).style.background = "#BEE7E8";
        }
        document.getElementById("mini-flex-board"+board).style.border = "none";
        document.getElementById("mini-flex-board"+rowColToNum[row][col]).style.border = "6px solid yellow";
        currentBoard = rowColToNum[row][col];
        megaWinCheck();
    }
}

function playerText() {
    if (whichTurn % 2 == 0) {
        document.getElementById("player").innerHTML = "Player 1";
        document.getElementById("player").style.color = "#FF66B3";
    }
    else {
        document.getElementById("player").innerHTML = "Player 2";
        document.getElementById("player").style.color = "#084B83"
    }
}

function winCheck(miniBoardObject) {
    if (miniBoardObject.board[0][0] != "" && (miniBoardObject.board[0][0] == miniBoardObject.board[0][1] && miniBoardObject.board[0][1] == miniBoardObject.board[0][2])){
        miniBoardObject.winner = miniBoardObject.board[0][0];
    }
    else if ((miniBoardObject.board[1][0] != "") && (miniBoardObject.board[1][0] == miniBoardObject.board[1][1] && miniBoardObject.board[1][1] == miniBoardObject.board[1][2])) {
        miniBoardObject.winner = miniBoardObject.board[1][0];
    }
    else if ((miniBoardObject.board[2][0] != "") && (miniBoardObject.board[2][0] == miniBoardObject.board[2][1] && miniBoardObject.board[2][1] == miniBoardObject.board[2][2])) {
        miniBoardObject.winner = miniBoardObject.board[2][0];
    }
    else if ((miniBoardObject.board[0][0] != "") && (miniBoardObject.board[0][0] == miniBoardObject.board[1][0] && miniBoardObject.board[1][0] == miniBoardObject.board[2][0])) {
        miniBoardObject.winner = miniBoardObject.board[0][0];
    }
    else if ((miniBoardObject.board[0][1] != "") && (miniBoardObject.board[0][1] == miniBoardObject.board[1][1] && miniBoardObject.board[1][1] == miniBoardObject.board[2][1])) {
        miniBoardObject.winner = miniBoardObject.board[0][1];
    }
    else if ((miniBoardObject.board[0][2] != "") && (miniBoardObject.board[0][2] == miniBoardObject.board[1][2] && miniBoardObject.board[1][2] == miniBoardObject.board[2][2])) {
        miniBoardObject.winner = miniBoardObject.board[0][2];
    }
    else if ((miniBoardObject.board[0][0] != "") && (miniBoardObject.board[0][0] == miniBoardObject.board[1][1] && miniBoardObject.board[1][1] == miniBoardObject.board[2][2])) {
        miniBoardObject.winner = miniBoardObject.board[0][0];
    }
    else if ((miniBoardObject.board[0][2] != "") && (miniBoardObject.board[0][2] == miniBoardObject.board[1][1] && miniBoardObject.board[1][1] == miniBoardObject.board[2][0])) {
        miniBoardObject.winner = miniBoardObject.board[0][2];
    }
    else {
        miniBoardObject.winner = null;
    }
}

function megaWinCheck() {
    if (miniBoard0.winner != null && miniBoard0.winner == miniBoard1.winner && miniBoard1.winner == miniBoard2.winner) {
        megaWinHighlight(0, 1, 2, miniBoard0.winner);
    }
    else if (miniBoard3.winner != null && miniBoard3.winner == miniBoard4.winner && miniBoard4.winner == miniBoard5.winner) {
        megaWinHighlight(3, 4, 5, miniBoard3.winner);
    }
    else if (miniBoard6.winner != null && miniBoard6.winner == miniBoard7.winner && miniBoard7.winner == miniBoard8.winner) {
        megaWinHighlight(6, 7, 8, miniBoard6.winner);
    }
    else if (miniBoard0.winner != null && miniBoard0.winner == miniBoard3.winner && miniBoard3.winner == miniBoard6.winner) {
        megaWinHighlight(0, 3, 6, miniBoard0.winner);
    }
    else if (miniBoard1.winner != null && miniBoard1.winner == miniBoard4.winner && miniBoard4.winner == miniBoard7.winner) {
        megaWinHighlight(1, 4, 7, miniBoard1.winner);
    }
    else if (miniBoard2.winner != null && miniBoard2.winner == miniBoard5.winner && miniBoard5.winner == miniBoard8.winner) {
        megaWinHighlight(2, 5, 8, miniBoard2.winner);
    }
    else if (miniBoard0.winner != null && miniBoard0.winner == miniBoard4.winner && miniBoard4.winner == miniBoard8.winner) {
        megaWinHighlight(0, 4, 8, miniBoard0.winner);
    }
    else if (miniBoard2.winner != null && miniBoard2.winner == miniBoard4.winner && miniBoard4.winner == miniBoard6.winner) {
        megaWinHighlight(2, 4, 6, miniBoard2.winner);
    }
}

function megaWinHighlight(board1, board2, board3, winner) {
    game = false;
    document.getElementById("mini-flex-board"+currentBoard).style.border = "none";
    document.getElementById("mini-flex-board"+board1).style.background = "#8bca84";
    document.getElementById("mini-flex-board"+board2).style.background = "#8bca84";
    document.getElementById("mini-flex-board"+board3).style.background = "#8bca84";
    if (winner == "X") {
        document.getElementById("flex-board").style.border = "12px solid #F5E6E8";
        document.getElementById("winner-popup-text").innerHTML = "Congratulations Player 1!";
        document.getElementById("winner-popup-box").style.border = "4px solid #FF66B3";
    }
    else if (winner == "O") {
        document.getElementById("flex-board").style.border = "12px solid #BEE7E8";
        document.getElementById("winner-popup-text").innerHTML = "Congratulations Player 2!";
        document.getElementById("winner-popup-box").style.border = "4px solid #084B83";
    }
    document.getElementById("winner-popup-title").innerHTML = winner + " MEGA Wins!";
    document.getElementById("winner-popup-box").style.visibility = "visible";
}

function closePopup(Id) {
    document.getElementById(Id).style.visibility = "hidden";
}

function resetHelper() {
    document.getElementById("reset-popup-box").style.visibility = "visible";
}

function reset() {
    location.reload();
}

function undo() {
    if (game == false) {
        alert("Game over. You cannot undo moves.");
    }
    else if (moveStack.length > 0) {
        undoMove = moveStack.pop()
        megaBoard[Number(undoMove[0])].board[Number(undoMove[1])][Number(undoMove[2])] = "";
        document.getElementById("mini-flex-cell"+undoMove[0]+rowColToNum[Number(undoMove[1])][Number(undoMove[2])]).innerHTML = "";
        playerText();
        whichTurn--;
        if (megaBoard[Number(undoMove[0])].winner != null) {
            winCheck(megaBoard[Number(undoMove[0])]);
            if (megaBoard[Number(undoMove[0])].winner == null) {
                document.getElementById("mini-flex-board"+undoMove[0]).style.background = "none";
            }
        }
        document.getElementById("mini-flex-board"+rowColToNum[Number(undoMove[1])][Number(undoMove[2])]).style.border = "none";
        if (moveStack.length == 0) {
            document.getElementById("mini-flex-board"+undoMove[0]).style.border = "none";
            currentBoard = null;
            document.getElementById("player").innerHTML = "Player 1 Start";
        }
        else {
            document.getElementById("mini-flex-board"+undoMove[0]).style.border = "6px solid yellow";
            currentBoard = undoMove[0];
        }
    }
    else {
        alert("There are no moves to undo.");
    }
}