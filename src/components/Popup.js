export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popUp = document.querySelector(popupSelector);
  }

  open() {
    this._popUp.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popUp.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.code == 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popUp.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}
