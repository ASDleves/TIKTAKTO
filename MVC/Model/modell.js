class GameModel {
    #lepes;
    #currentPlayer;
    #isGameInProgress;
    #moves;

    constructor() {
    this.#lepes = 0;
    this.#currentPlayer = 'X';
    this.#isGameInProgress = true;
    this.#moves = 0;
}
    getCurrentPlayer() {
        return this.#currentPlayer;
    }
    makeMove() {
        if (this.#isGameInProgress) {
            this.#lepes++;
            this.#moves++;
    
            this.#currentPlayer = this.#currentPlayer === 'O' ? 'X' : 'O'; 
            return {
                currentPlayer: this.#currentPlayer,
                isGameInProgress: this.#isGameInProgress,
                moves: this.#moves,
            };
        }
    
        return null;
    }
}

export default GameModel;