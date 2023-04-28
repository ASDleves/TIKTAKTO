import Elem from "./elem.js";
import InfoPanel from "./infoPanel.js";
class Jatekter {
    #lepes;
  
    constructor() {
      this.#lepes = 0;
      const szuloElem = $("article");
      const asideElem = $("aside");

      const infoPanel = new InfoPanel(asideElem);

      const playerPTag = $(asideElem).find("p").first();
      const jatekfolyamat = $(asideElem).find("p").last();
      // create Elem instances and append to article
      for (let index = 0; index < 9; index++) {
        const elem = new Elem(index, szuloElem);
      }
  
      $(window).on("elemKivalasztas", (event) => {
        if (this.#lepes % 2 === 0) {
          event.detail.setElem("X");
          playerPTag.text("Játékos: O");
        } else {
          event.detail.setElem("O");
          playerPTag.text("Játékos: X");
        }
        this.#lepes++;
        infoPanel.updateLepes(this.#lepes);
        if (this.#lepes < 9){
            jatekfolyamat.text("A játék folyamatban")
        }else{
            jatekfolyamat.text("A játék vége!")
        }
      });
    }
  }
  
  export default Jatekter;