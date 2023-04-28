class InfoPanel {
    #lepesElem;
  
    constructor(szuloElem) {
      const p1 = $("<p>").text("Játékos: X");
      const p2 = $("<p>").text(`Lépésszám: `);
      const p3 = $("<p>").text("Játék még nincs elkezdve");
  
      this.#lepesElem = p2;
  
      $(szuloElem).append(p1, p2, p3);
    }
  
    updateLepes(lepes) {
      this.#lepesElem.text(`Lépésszám: ${lepes}`);
    }
  }
  
  export default InfoPanel;