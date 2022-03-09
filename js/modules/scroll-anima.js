export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.ativo = "ativo";

    // Bind do callback, ligação ao this
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) section.classList.add(this.ativo);
      else if (section.classList.contains(this.ativo))
        section.classList.remove(this.ativo);
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);

    return this;
  }
}
