import { userID } from "../pages";
export default class Card {
  constructor(item, selector, handleCardClick, handleDeleteClick, handleLikeCard) {
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes.length;
    this._ownerId = item.owner._id;
    this._selector = selector;
    this._photoCard = document.querySelector(this._selector).content.querySelector('.photo-grid__card').cloneNode(true);
    this._photoCardImage = this._photoCard.querySelector('.photo-grid__card-image');
    this._photoCardText = this._photoCard.querySelector('.photo-grid__card-text');
    this._photoCardLikes = this._photoCard.querySelector('.photo-grid__like-counter');
    this._likeButton = this._photoCard.querySelector('.photo-grid__like-button');
    this._removeButton = this._photoCard.querySelector('.photo-grid__remove-button');
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeCard = handleLikeCard;
  }

  _fillCardContent() {
    this._photoCardImage.src = this._link;
    this._photoCardImage.alt = this._name;
    this._photoCardText.textContent = this._name;
    this._photoCardLikes.textContent = this._likes;
  }

  _checkOwnerId() {
    if (this._ownerId != userID) {
      this._removeButton.remove();
    } else {
    }
  }

  _checkOwnerLike() {
    if (this._likes !== 0) {
      let counter = 0;
      for (let i = 0; i < this._likes; i++) {
        if (this._item.likes[i]._id !== userID) {
          counter += 1;
        }
      }
      if (counter !== this._likes)
        this._likeButton.classList.add('photo-grid__like-button_active');
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard(this._item, this._likeButton, this._photoCardLikes);
    });
    this._removeButton.addEventListener('click', () => {
      this._handleDeleteClick(this._item, this._photoCard);
    });
    this._photoCardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._fillCardContent();
    this._checkOwnerId();
    this._checkOwnerLike();
    this._setEventListeners();
    return this._photoCard;
  }
}
