import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards } from '../utils/constants';
import { validationConfig } from '../utils/constants';
const cardListSelector = '.photo-grid__cards';
const defaultCardList = new Section({
  data: initialCards, renderer: (item) => {
    defaultCardList.addItem(createCard(item));
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
const cardPopup = new PopupWithImage('.popup_photo-card');
const formValidators = {};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

function createCard(item) {
  const card = new Card(item, '.card-template', handlePhotoClick);
  return card.generateCard();
}

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  profilePopup.close();
}

function handlePhotoFormSubmit(data) {
  const newCardInputValues = {
    name: data.photo_caption,
    link: data.photo_link,
  };
  defaultCardList.addItem(createCard(newCardInputValues));
  photoPopup.close();
}

function handlePhotoClick(name, link) {
  cardPopup.open(name, link);
}

function fillProfileFields() {
  const data = userInfo.getUserInfo();
  profileInputName.value = data.name;
  profileInputJob.value = data.job;
}

profileEditButton.addEventListener('click', function () {
  fillProfileFields();
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
