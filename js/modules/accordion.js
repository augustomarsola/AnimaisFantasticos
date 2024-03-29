export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classeAtivo = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
  }

  // Adiciona o evento ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }

  // Inicia a função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }

    return this;
  }
}
