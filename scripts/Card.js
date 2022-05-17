export default class Card {
  constructor(name, link, selector, func) {
    this._name = name;
    this._link = link;
    this._selector = selector;
    this._photoCard = document.querySelector(this._selector).content.querySelector('.photo-grid__card').cloneNode(true);
    this._photoCardImage = this._photoCard.querySelector('.photo-grid__card-image');
    this._photoCardText = this._photoCard.querySelector('.photo-grid__card-text');
    this._likeButton = this._photoCard.querySelector('.photo-grid__like-button');
    this._removeButton = this._photoCard.querySelector('.photo-grid__remove-button');
    this._popupImage = document.querySelector('.popup__image');
    this._popupCaption = document.querySelector('.popup__caption');
    this._func = func;
  }

  _fillCardContent() {
    this._photoCardImage.src = this._link;
    this._photoCardImage.alt = this._name;
    this._photoCardText.textContent = this._name;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('photo-grid__like-button_active');
  }

  _handleDeleteButton() {
    this._photoCard.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._removeButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });
    this._photoCardImage.addEventListener('click', () => {
      this._func(this._name, this._link);
    });
  }

  renderCard() {
    this._fillCardContent();
    this._setEventListeners();
    return this._photoCard;
  }
}
