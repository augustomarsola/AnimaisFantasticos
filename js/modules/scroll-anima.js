import debounce from "./debounce";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.ativo = "ativo";

    // Bind do callback, ligação ao this
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância dos elementos em relação ao topo da página
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia dos elementos em relação ao topo da página
  // E aplica o efeito da animação
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add(this.ativo);
      } else if (section.element.classList.contains(this.ativo)) {
        section.element.classList.remove(this.ativo);
      }
    });
  }

  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener("scroll", this.checkDistance);

    return this;
  }
}
