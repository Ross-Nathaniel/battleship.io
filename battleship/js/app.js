// You should add the tiles of gameboard to the dom
// The AI must select a random tile on the gameboard 
// You will select tiles and the game will indicte a HIT or a MISS
//On HIT the game is over
//Add a button

// function gameBoard() {

// }

// gameBoard();
const gameBoard = document.getElementById('gameboard');
win = false;

let buttons = 24;
const battleField = [
    {
        position: 0
    },
    {
        position: 1
    },
    {
        position: 2
    },
    {
        position: 3
    },
    {
        position: 4
    },
    {
        position: 5
    },
    {
        position: 6
    },
    {
        position: 7
    },
    {
        position: 8
    },
    {
        position: 9
    },
    {
        position: 10
    },
    {
        position: 11
    },
    {
        position: 12
    },
    {
        position: 13
    },
    {
        position: 14
    },
    {
        position: 15
    },
    {
        position: 16
    },
    {
        position: 17
    },
    {
        position: 18
    },
    {
        position: 19
    },
    {
        position: 20
    },
    {
        position: 21
    },
    {
        position: 22
    },
    {
        position: 23
    },
]
for(let i = 0; i < battleField.length; i++) {
    let el = document.createElement('div');
    el.setAttribute('data-value',i);
    el.classList.add("tile");
    gameBoard.appendChild(el);

    el.addEventListener("click", function (){
        battleship(this);
    });
}

function battleship (hit) {
    el = document.createElement("div");
    el.classList.add("tile");
    tile = document.getElementsByClassName("tile");
    let value = hit.getAttribute("data-value");

    if (!win) {
        if (value == hidingSpot.position) {
            win = true;
            hit.style.background = "green";
            document.getElementById('hit/miss').innerText = 'HIT! YOU WIN!';
        } else {
            hit.style.background = "red";
            document.getElementById('hit/miss').innerText = 'MISS!';
        }
    }
}

hidingSpot = battleField[Math.floor(Math.floor(Math.random() * (buttons)))];

function reset () {
    window.location.reload();
}

