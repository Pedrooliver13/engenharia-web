import Menu from "./module/menu.js";
import Modal from "./module/modal.js";

const menu = new Menu('[data-menu="button"]', '[data-menu="list"]');
menu.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();
