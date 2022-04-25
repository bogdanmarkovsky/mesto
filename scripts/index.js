const profilePopup = document.querySelector('.popup_profile-form');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profile-form-close-button');
const profileSubmitButton = document.querySelector('#profile-form-submit-button');
const profileForm = document.forms.profile_form;
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = profileForm.elements.profile_name;
const profileInputJob = profileForm.elements.profile_job;
const photoPopup = document.querySelector('.popup_photo-form');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const photoCloseButton = document.querySelector('#photo-form-close-button');
const photoSubmitButton = document.querySelector('#photo-form-submit-button');
const photoForm = document.forms.photo_form;
const photoInputCaption = photoForm.elements.photo_caption;
const photoInputLink = photoForm.elements.photo_link;
const cardPopup = document.querySelector('.popup_photo-card');
const cardCloseButton = document.querySelector('#photo-card-close-button');
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.photo-grid__cards');
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

function createCard(text, src) {
  const photoCard = cardTemplate.querySelector('.photo-grid__card').cloneNode(true);
  const cardImage = photoCard.querySelector('.photo-grid__card-image');
  cardImage.setAttribute('src', src);
  cardImage.setAttribute('alt', text);
  photoCard.querySelector('.photo-grid__card-text').textContent = text;
  photoCard.querySelector('.photo-grid__like-button').addEventListener('click', function () {
    this.classList.toggle('photo-grid__like-button_active');
  });
  photoCard.querySelector('.photo-grid__remove-button').addEventListener('click', function () {
    photoCard.remove();
  });
  cardImage.addEventListener('click', function () {
    const popupImage = cardPopup.querySelector('.popup__image');
    popupImage.setAttribute('src', src);
    popupImage.setAttribute('alt', text);
    cardPopup.querySelector('.popup__caption').textContent = text;
    openPopup(cardPopup);
  });
  return photoCard;
}

function renderCard(text, src) {
  cardContainer.prepend(createCard(text, src));
}

function profileFormSubmitHandler(event) {
  event.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closePopup(profilePopup);
}

function photoFormSubmitHandler(event) {
  event.preventDefault();
  renderCard(photoInputCaption.value, photoInputLink.value);
  closePopup(photoPopup);
  photoForm.reset();
}

profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
});

profileForm.addEventListener('submit', profileFormSubmitHandler);

profileEditButton.addEventListener('click', function () {
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
  resetValidationFields(profileForm, profileSubmitButton, listOfValidationElements);
  openPopup(profilePopup);
});

photoAddButton.addEventListener('click', function () {
  resetValidationFields(photoForm, photoSubmitButton, listOfValidationElements);
  openPopup(photoPopup);
});

photoCloseButton.addEventListener('click', function () {
  closePopup(photoPopup);
  photoForm.reset();
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
  renderCard(element.name, element.link);
});
