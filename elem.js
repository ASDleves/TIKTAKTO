class Elem{
    #allapot
    constructor(index, szuloElem){
        this.index = index;
        this.#allapot= true;
        szuloElem.append(`<div class="negyzet"><p></p></div>`)

        this.divElem = $("article div:last-child");

        this.pElem= this.divElem.children("p")
        this.divElem.on("click", () => {
            if(this.#allapot){

            
            this.setElem("X")
            this.esemenyTrigger()
        }
        this.#allapot=false;
        });
}

    setElem(ertek){
        this.pElem.html(ertek)
    }
    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKivalasztas", {
             detail: this
            });
        window.dispatchEvent(esemeny)
    }
}
export default Elem;