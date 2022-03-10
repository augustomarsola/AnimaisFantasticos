import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuBtn, menuLi, events) {
    this.menuButton = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuLi);
    this.events = events || ["click", "touchstart"];
    this.activeClass = "active";

    // Bind
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.menuButton.addEventListener("click", this.openMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
