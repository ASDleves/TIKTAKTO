import GameModel from "../Model/modell.js";
class InfoView {
  #lepesElem;
  #jatekosElem;
  #kovi;
  #jatekfolyamatElem;
  #gameModel; // Add a private field for the GameModel instance

  constructor(szuloElem) {

    const p1 = $("<p>").text(`Játékos: `);
    p1.attr("id", "valtozas")
    const p3 = $("<p>").text(`Következő: `);
    const p2 = $("<p>").text(`Lépésszám: `);

    this.#lepesElem = p2;
    this.#jatekosElem = p1;
    this.#kovi=p3
    this.#jatekfolyamatElem = $("<p>").text("A játék még nincs elkezdve");

    this.#gameModel = new GameModel();

    $(szuloElem).append(this.#jatekosElem,this.#kovi, this.#lepesElem, this.#jatekfolyamatElem);

    this.updatePlayer();
  }


  updatePlayer() {

    this.#jatekosElem.text(`Játékos: ${this.#gameModel.getCurrentPlayer()}`);
  }
  updateLepes(lepes) {
    this.#lepesElem.text(`Lépésszám: ${lepes}`);
  }
  updateGameStatus(status) {
    this.#jatekfolyamatElem.text(status);
  }
  updateKovi() {
    const oppositePlayerSymbol = this.#gameModel.getCurrentPlayer() === 'X' ? 'O' : 'X';
    this.#kovi.text(`Következő: ${oppositePlayerSymbol}`);
  }
}

export default InfoView;