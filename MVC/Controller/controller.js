import TictactoView from "../View/TictacToView.js";
import InfoView from "../View/InfoView.js";

class Controller {
    #lepes;

    constructor() {
        this.#lepes = 0;
        const szuloElem = $("article");
        const asideElem = $("aside");

        const infoPanel = new InfoView(asideElem);

        const playerPTag = $(asideElem).find("p").first();
        const jatekfolyamat = infoPanel.updateGameStatus("A játék folyamatban");

        for (let index = 0; index < 9; index++) {
            const elem = new TictactoView(index, szuloElem);
        }

        $(window).on("elemKivalasztas", (event) => {
          //modell szamolasok
            if (this.#lepes % 2 === 0) {
                event.detail.setElem("X");
                playerPTag.text("Játékos: O");
            } else {
                event.detail.setElem("O");
                playerPTag.text("Játékos: X");
            }
            this.#lepes++;
            infoPanel.updateLepes(this.#lepes);

            if (this.#lepes < 9) {
                infoPanel.updateGameStatus("A játék folyamatban");
            } else {
                infoPanel.updateGameStatus("A játék vége!");
            }
        });
    }
}

export default Controller;