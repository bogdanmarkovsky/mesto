export default class Card {
  constructor(item, selector, { handlePhotoClick, handleDeleteClick, handleAddLike, handleDeleteLike }, userid) {
    this._item = item;
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._ownerId = item.owner._id;
    this._selector = selector;
    this._photoCard = document.querySelector(this._selector).content.querySelector('.photo-grid__card').cloneNode(true);
    this._photoCardImage = this._photoCard.querySelector('.photo-grid__card-image');
    this._photoCardText = this._photoCard.querySelector('.photo-grid__card-text');
    this._photoCardLikes = this._photoCard.querySelector('.photo-grid__like-counter');
    this._likeButton = this._photoCard.querySelector('.photo-grid__like-button');
    this._removeButton = this._photoCard.querySelector('.photo-grid__remove-button');
    this._handlePhotoClick = handlePhotoClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._userID = userid;
  }

  _fillCardContent() {
    this._photoCardImage.src = this._link;
    this._photoCardImage.alt = this._name;
    this._photoCardText.textContent = this._name;
    this._photoCardLikes.textContent = this._likes.length;
  }

  _checkOwnerId() {
    if (this._ownerId !== this._userID) {
      this._removeButton.remove();
    }
  }

  deleteCard() {
    this._photoCard.remove();
    this._photoCard = null;
  }

  _isLiked = () => this._likes.some((item) => item._id === this._userID);

  _isLikeState = () => {
    if (this._isLiked()) {
      this._handleDeleteLike(this._item);
    } else {
      this._handleAddLike(this._item);
    }
  }

  _checkLikeOwner() {
    if (this._isLiked()) {
      this.addLike(this._item);
    }
  }

  addLike(item) {
    this._likeButton.classList.add('photo-grid__like-button_active');
    this._likes = item.likes;
    this._photoCardLikes.textContent = item.likes.length;
  }

  deleteLike(item) {
    this._likeButton.classList.remove('photo-grid__like-button_active');
    this._likes = item.likes;
    this._photoCardLikes.textContent = item.likes.length
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._isLikeState);
    this._removeButton.addEventListener('click', () => {
      this._handleDeleteClick(this._item);
    });
    this._photoCardImage.addEventListener('click', () => {
      this._handlePhotoClick(this._name, this._link);
    });
  }

  generateCard() {
    this._fillCardContent();
    this._checkOwnerId();
    this._checkLikeOwner();
    this._setEventListeners();
    return this._photoCard;
  }
}
