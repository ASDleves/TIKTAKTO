import TictactoView from "../View/TictacToView.js";
import InfoView from "../View/InfoView.js";
import GameModel from "../Model/modell.js";

class Controller {
  constructor() {
      const szuloElem = $("article");
      const asideElem = $("aside");
      const gameModel = new GameModel();

      const infoPanel = new InfoView(asideElem);

      const playerPTag = $(asideElem).find("p").first();

      for (let index = 0; index < 9; index++) {
          const elem = new TictactoView(index, szuloElem);
      }
      const pElement = $("#valtozas");
      pElement.text("Játékos: Első lépés");
      $(window).on("elemKivalasztas", (event) => {
          const result = gameModel.makeMove();
          
          if (result) {
              event.detail.setElem(result.currentPlayer);
              playerPTag.text(`Játékos: ${result.currentPlayer}`);
              infoPanel.updateKovi(); 
              console.log('updateKovi called')
              infoPanel.updateLepes(result.moves);
              
              if (result.isGameInProgress) {
                  infoPanel.updateGameStatus("A játék folyamatban");
              } else {
                  infoPanel.updateGameStatus("A játék vége!");
              }
          }
      });
  }
}


export default Controller;