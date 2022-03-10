export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    // bind dos funções
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Realiza a animação de incremento do número
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Chama a função de incremento
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // Observador do elemento
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Chama o observador
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);

    this.observer.observe(this.observeTarget, {
      attributes: true,
    });
  }

  // Inicia o processo
  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
