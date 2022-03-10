import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(selector, active, events) {
    this.dropdownMenus = document.querySelectorAll(selector);
    this.activeClass = active;
    this.events = events || ["touchstart", "click"];
    // Bind
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addDropdownMenuEvent();

    return this;
  }
}
