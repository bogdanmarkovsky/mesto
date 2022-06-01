import Popup from './Popup.js';
export default class PicturePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardPopupImage = document.querySelector('.popup__image');
    this._cardPopupText = document.querySelector('.popup__caption');
  }

  open(name, link) {
    this._cardPopupImage.alt = name;
    this._cardPopupImage.src = link;
    this._cardPopupText.textContent = name;
    super.open();
  }
}
