import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js';
const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_profile-form');
const photoPopup = document.querySelector('.popup_photo-form');
const cardPopup = document.querySelector('.popup_photo-card');
const cardPopupImage = cardPopup.querySelector('.popup__image');
const cardPopupText = cardPopup.querySelector('.popup__caption');
const profileForm = document.forms.profile_form;
const photoForm = document.forms.photo_form;
const profileEditButton = document.querySelector('.profile__edit-button');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = profileForm.elements.profile_name;
const profileInputJob = profileForm.elements.profile_job;
const photoInputCaption = photoForm.elements.photo_caption;
const photoInputLink = photoForm.elements.photo_link;
const cardContainer = document.querySelector('.photo-grid__cards');
const formValidators = {};
const validationConfig = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__field',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
  submitButtonClass: '.popup-form__submit-button',
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

function createCard(name, link) {
  const card = new Card(name, link, '.card-template', handlePhotoClick);
  return card.renderCard();
}

function handlePhotoClick(name, link) {
  cardPopupImage.src = link;
  cardPopupImage.alt = name;
  cardPopupText.textContent = name;
  openPopup(cardPopup);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closePopup(profilePopup);
}

function handlePhotoFormSubmit(event) {
  event.preventDefault();
  cardContainer.prepend(createCard(photoInputCaption.value, photoInputLink.value));
  closePopup(photoPopup);
  photoForm.reset();
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

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

profileEditButton.addEventListener('click', function () {
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
  formValidators['profile_form'].resetValidationFields();
  openPopup(profilePopup);
});

photoAddButton.addEventListener('click', function () {
  photoForm.reset();
  formValidators['photo_form'].resetValidationFields();
  openPopup(photoPopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);
photoForm.addEventListener('submit', handlePhotoFormSubmit);

initialCards.forEach(element => {
  cardContainer.prepend(createCard(element.name, element.link));
});

enableValidation(validationConfig);
