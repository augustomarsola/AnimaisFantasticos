import ScrollSuave from "./modules/scroll-suave.js";
import initAnimaScroll from "./modules/scroll-animacao.js";
import initAccodrion from "./modules/accordion.js";
import iniTabNav from "./modules/tabNav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initmenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import iniFectAnimais from "./modules/fecth-animais.js";
import iniFectBitcoin from "./modules/fecth-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimaScroll();
initAccodrion();
iniTabNav();
initModal();
initTooltip();
initDropdownMenu();
initmenuMobile();
initFuncionamento();
iniFectAnimais();
iniFectBitcoin();
