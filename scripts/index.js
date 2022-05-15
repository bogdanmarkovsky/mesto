const profilePopup = document.querySelector('.popup_profile-form');
const photoPopup = document.querySelector('.popup_photo-form');
const cardPopup = document.querySelector('.popup_photo-card');
const profileForm = document.forms.profile_form;
const photoForm = document.forms.photo_form;
const profileEditButton = document.querySelector('.profile__edit-button');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const profileCloseButton = document.querySelector('#profile-form-close-button');
const photoCloseButton = document.querySelector('#photo-form-close-button');
const cardCloseButton = document.querySelector('#photo-card-close-button');
const profileSubmitButton = document.querySelector('#profile-form-submit-button');
const photoSubmitButton = document.querySelector('#photo-form-submit-button');
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = profileForm.elements.profile_name;
const profileInputJob = profileForm.elements.profile_job;
const photoInputCaption = photoForm.elements.photo_caption;
const photoInputLink = photoForm.elements.photo_link;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const list = {
  cardTemplateSelector: '#card-template',
  cardContainerSelector: '.photo-grid__cards',
  photoCardSelector: '.photo-grid__card',
  photoCardImageSelector: '.photo-grid__card-image',
  photoCardPopupImageSelector: '.popup__image',
  photoCardTextSelector: '.photo-grid__card-text',
  photoCardLikeButtonSelector: 'photo-grid__like-button_active',
  photoCardRemoveButtonSelector: '.photo-grid__remove-button',
  popupImageSelector: '.popup__image',
  popupCaptionSelector: '.popup__caption',
};

function createCard(object) {
  const cardTemplate = document.querySelector(object['cardTemplateSelector']).content;
  const photoCard = cardTemplate.querySelector(object['photoCardSelector']).cloneNode(true);
  return photoCard;
}

function fillCardContent(card, src, text, object, imageSelector, textSelector) {
  const cardImage = card.querySelector(object[imageSelector]);
  cardImage.setAttribute('src', src);
  cardImage.setAttribute('alt', text);
  card.querySelector(object[textSelector]).textContent = text;
  return cardImage;
}

function addToggleLike(card, object) {
  card.querySelector('.photo-grid__like-button').addEventListener('click', function () {
    this.classList.toggle(object.photoCardLikeButtonSelector);
  });
}

function addDeleteButton(card) {
  card.querySelector('.photo-grid__remove-button').addEventListener('click', function () {
    card.remove();
  });
}

function renderCard(text, src, object) {
  const photoCard = createCard(object);
  const cardImage = fillCardContent(photoCard, src, text, object, 'photoCardImageSelector', 'photoCardTextSelector');
  addToggleLike(photoCard, object);
  addDeleteButton(photoCard);
  cardImage.addEventListener('click', function () {
    fillCardContent(cardPopup, src, text, object, 'popupImageSelector', 'popupCaptionSelector');
    openPopup(cardPopup);
  });
  document.querySelector(object.cardContainerSelector).prepend(photoCard);
}

function closePopupOnEscape(event) {
  if (event.code == 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEscape);
}

function profileFormSubmitHandler(event) {
  event.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closePopup(profilePopup);
}

function photoFormSubmitHandler(event) {
  event.preventDefault();
  renderCard(photoInputCaption.value, photoInputLink.value, list);
  closePopup(photoPopup);
  photoForm.reset();
}

profileEditButton.addEventListener('click', function () {
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
  resetValidationFields(profileForm, profileSubmitButton, listOfValidationElements);
  openPopup(profilePopup);
});

profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
});

profileForm.addEventListener('submit', profileFormSubmitHandler);

photoAddButton.addEventListener('click', function () {
  photoForm.reset();
  resetValidationFields(photoForm, photoSubmitButton, listOfValidationElements);
  openPopup(photoPopup);
});

photoCloseButton.addEventListener('click', function () {
  closePopup(photoPopup);
});

photoForm.addEventListener('submit', photoFormSubmitHandler);

cardCloseButton.addEventListener('click', function () {
  closePopup(cardPopup);
});

document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('mousedown', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

initialCards.forEach(element => {
  renderCard(element.name, element.link, list);
});
