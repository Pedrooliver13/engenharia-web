// import outsideClick from './outsideclick';

export default class Modal {
  constructor(buttonOpen, buttonClose, targetContainer, activeClass) {
    this.buttonOpen = document.querySelectorAll(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modalContainer = document.querySelector(targetContainer);

    this.activeClass = activeClass === undefined ? "active" : activeClass;

    this.activeModal = this.activeModal.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  activeModal(event) {
    event.preventDefault();

    if (!this.modalContainer.classList.contains(this.activeClass)){
      this.insertHtml(event);
    }

    this.modalContainer.classList.toggle(this.activeClass);
  }

  insertHtml(event) {
    const content = this.modalContainer.querySelector(".modal__content img");

    this.getSrcImage(event);
    content.src = this.srcImg;

    return;
  }

  getSrcImage(event) {
    this.srcImg = event.target.getAttribute("src");
  }

  outsideClick(event) {
    if (event.target === this.modalContainer) {
      this.activeModal(event);
    }
  }

  addModalListener() {
    this.buttonOpen.forEach((item) => {
      item.addEventListener("click", this.activeModal);
    });

    this.buttonClose.addEventListener("click", this.activeModal);
    this.modalContainer.addEventListener("click", this.outsideClick);
  }

  init() {
    if (this.modalContainer) {
      this.addModalListener();
    }

    return this;
  }
}
