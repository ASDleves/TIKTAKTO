class InfoView {
  #lepesElem;
  #jatekfolyamatElem; // Add this private field for game status

  constructor(szuloElem) {
      const p1 = $("<p>").text("Játékos: X");
      const p2 = $("<p>").text(`Lépésszám: `);
      const p3 = $("<p>").text("A játék még nincs elkezdve");

      this.#lepesElem = p2;
      this.#jatekfolyamatElem = p3; // Initialize the game status element

      $(szuloElem).append(p1, p2, p3);
  }

  updateLepes(lepes) {
      this.#lepesElem.text(`Lépésszám: ${lepes}`);
  }

  updateGameStatus(status) {
      this.#jatekfolyamatElem.text(status);
  }

}

export default InfoView;