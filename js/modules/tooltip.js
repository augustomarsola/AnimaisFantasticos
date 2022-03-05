export default class Tooltip {
  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    // bind do objeto da classe para calbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Cria a caixa tooltip que será inserido na página
  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    tooltipBox.classList.add("tooltip");
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
    return tooltipBox;
  }

  // Observa o movimento do mouse e aplica o stilo da posição
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 230 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove os eventos que não serão utilizados ao remover o mouse do mapa
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
  }

  // Comportamento ao entrar com o mouse no mapa, neste caso utilizando componente direto do event.currentTarget como parâmetro
  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Adiciona o evento dos tooltips aos campos selecionados
  addTooltipEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.onMouseOver);
    });
  }

  // Inicia o evento
  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }

    return this;
  }
}
