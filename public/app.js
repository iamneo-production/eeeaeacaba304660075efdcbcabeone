// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === '' && !checkWin()) {
        cells[index] = currentPlayer;
        element.value = currentPlayer;
        element.disabled = true;

        if (checkWin()) {
            result.textContent = `Player ${currentPlayer} wins!`;
            disableAllButtons();
        } else if (!cells.includes('')) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
};

const checkWin = () => {
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return true;
        }
    }
    return false;
};

const disableAllButtons = () => {
    btns.forEach((btn) => {
        btn.disabled = true;
    });
};

const resetGame = () => {
    currentPlayer = 'X';
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn,i) => {
        btn.value = '';
        btn.disabled = false;
    });
    result.textContent = `Player ${currentPlayer}'s Turn`;
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});


document.querySelector('#reset').addEventListener('click', resetGame);
