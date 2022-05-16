import Card from './card.js';
import FormValidator from './validate.js';
import initialCards from './initialCards.js';
const profilePopup = document.querySelector('.popup_profile-form');
const photoPopup = document.querySelector('.popup_photo-form');
const profileForm = document.forms.profile_form;
const photoForm = document.forms.photo_form;
const profileEditButton = document.querySelector('.profile__edit-button');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const profileCloseButton = document.querySelector('#profile-form-close-button');
const photoCloseButton = document.querySelector('#photo-form-close-button');
const profileSubmitButton = document.querySelector('#profile-form-submit-button');
const photoSubmitButton = document.querySelector('#photo-form-submit-button');
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = profileForm.elements.profile_name;
const profileInputJob = profileForm.elements.profile_job;
const photoInputCaption = photoForm.elements.photo_caption;
const photoInputLink = photoForm.elements.photo_link;
const validationConfig = {
  inputSelector: '.popup-form__field',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
};

const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();
const photoFormValidator = new FormValidator(validationConfig, photoForm);
photoFormValidator.enableValidation();

function profileFormSubmitHandler(event) {
  event.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closePopup(profilePopup);
}

function photoFormSubmitHandler(event) {
  event.preventDefault();
  const card = new Card(photoInputCaption.value, photoInputLink.value, '.card-template', openPopup, closePopup);
  card.renderCard();
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
  popup.addEventListener('mousedown', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEscape);
}

profileEditButton.addEventListener('click', function () {
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
  profileFormValidator.resetValidationFields(profileForm, profileSubmitButton);
  openPopup(profilePopup);
});

photoAddButton.addEventListener('click', function () {
  photoForm.reset();
  photoFormValidator.resetValidationFields(photoForm, photoSubmitButton);
  openPopup(photoPopup);
});

profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
});

photoCloseButton.addEventListener('click', function () {
  closePopup(photoPopup);
});

profileForm.addEventListener('submit', profileFormSubmitHandler);
photoForm.addEventListener('submit', photoFormSubmitHandler);

initialCards.forEach(element => {
  const card = new Card(element.name, element.link, '.card-template', openPopup, closePopup);
  card.renderCard();
});
