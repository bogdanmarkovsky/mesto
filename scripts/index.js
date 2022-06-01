import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PicturePopup from './components/PicturePopup.js';
import PopupWithForm from './components/PopupWithForm.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
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
const cardListSelector = '.photo-grid__cards';
const defaultCardList = new Section({
  data: initialCards, renderer: (item) => {
    const card = new Card(item, '.card-template', handlePhotoClick);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardListSelector);
const profileForm = document.forms.profile_form;
const profileEditButton = document.querySelector('.profile__edit-button');
const profileInputName = profileForm.elements.profile_name;
const profileInputJob = profileForm.elements.profile_job;
const photoAddButton = document.querySelector('.profile__add-photo-button');
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const profilePopup = new PopupWithForm('.popup_profile-form', handleProfileFormSubmit);
const photoPopup = new PopupWithForm('.popup_photo-form', handlePhotoFormSubmit);
const cardPopup = new PicturePopup('.popup_photo-card');
const formValidators = {};
const validationConfig = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__field',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
  submitButtonClass: '.popup-form__submit-button',
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  profilePopup.close();
}

function handlePhotoFormSubmit(data) {
  const newCardInputValue = [{
    name: data.photo_caption,
    link: data.photo_link,
  }];
  const newRenderCard = new Section({
    data: newCardInputValue, renderer: (item) => {
      const card = new Card(item, '.card-template', handlePhotoClick);
      const cardElement = card.generateCard();
      newRenderCard.addItem(cardElement);
    }
  }, cardListSelector);
  newRenderCard.renderItems();
  photoPopup.close();
}

function handlePhotoClick(name, link) {
  cardPopup.open(name, link);
}

profileEditButton.addEventListener('click', function () {
  const data = userInfo.getUserInfo();
  profileInputName.value = data.name;
  profileInputJob.value = data.job;
  formValidators['profile_form'].resetValidationFields();
  profilePopup.open();
});
photoAddButton.addEventListener('click', function () {
  formValidators['photo_form'].resetValidationFields();
  photoPopup.open();
});
cardPopup.setEventListeners();
profilePopup.setEventListeners();
photoPopup.setEventListeners();
defaultCardList.renderItems();
enableValidation(validationConfig);
