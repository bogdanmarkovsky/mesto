export default class Card {
  constructor(name, link, selector, openFunction, closeFunction) {
    this._name = name;
    this._link = link;
    this._selector = selector;
    this._openFunction = openFunction;
    this._closeFunction = closeFunction;
  }

  _createCard() {
    const cardTemplate = document.querySelector(this._selector).content;
    const photoCard = cardTemplate.querySelector('.photo-grid__card').cloneNode(true);
    return photoCard;
  }

  _fillCardContent() {
    this._element = this._createCard();
    this._element.querySelector('.photo-grid__card-image').src = this._link;
    this._element.querySelector('.photo-grid__card-image').alt = this._name;
    this._element.querySelector('.photo-grid__card-text').textContent = this._name;
  }

  _handleLikeButton() {
    this._element.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _handleOpenImagePopup() {
    document.querySelector('.popup__image').src = this._link;
    document.querySelector('.popup__image').alt = this._name;
    document.querySelector('.popup__caption').textContent = this._name;
    this._openFunction(document.querySelector('.popup_photo-card'));
  }

  _handleCloseImagePopup() {
    this._closeFunction(document.querySelector('.popup_photo-card'));
  }

  _setEventListeners() {
    this._element.querySelector('.photo-grid__like-button').addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._element.querySelector('.photo-grid__remove-button').addEventListener('click', () => {
      this._handleDeleteButton();
    });
    this._element.querySelector('.photo-grid__card-image').addEventListener('click', () => {
      this._handleOpenImagePopup();
    });
    document.querySelector('#photo-card-close-button').addEventListener('click', () => {
      this._handleCloseImagePopup();
    });
  }

  renderCard() {
    this._fillCardContent();
    this._setEventListeners();
    document.querySelector('.photo-grid__cards').prepend(this._element);
  }
}
