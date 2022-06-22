import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { validationConfig } from '../utils/constants';
import Api from '../components/Api';
import { cardListSelector } from '../utils/constants';
import { profileEditButton } from '../utils/constants';
import { editAvaButton } from '../utils/constants';
import { profileInputName } from '../utils/constants';
import { profileInputJob } from '../utils/constants';
import { photoAddButton } from '../utils/constants';
import { avatarContainer } from '../utils/constants';
import { formValidators } from '../utils/constants';
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const profilePopup = new PopupWithForm('.popup_profile-form', handleProfileFormSubmit);
const photoPopup = new PopupWithForm('.popup_photo-form', handlePhotoFormSubmit);
const avatarPopup = new PopupWithForm('.popup_change-ava', handleAvatarFormSubmit);
const cardPopup = new PopupWithImage('.popup_photo-card');
const deleteCardPopup = new PopupWithConfirmation('.popup_delete-card');
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-43', { authorization: 'ac52a8a6-2f6f-44a0-a599-9a1089a190d8', 'Content-Type': 'application/json' });
let userID = '';
let defaultCardList;

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

function fillProfileInfo(info) {
  avatarContainer.style.backgroundImage = `url('${info.avatar}')`;
  userInfo.setUserInfo(info);
  const userDataFromServer = userInfo.getUserInfo();
  profileInputName.value = userDataFromServer.name;
  profileInputJob.value = userDataFromServer.job;
}

function setUserID(id) {
  userID = id;
}

function renderCardsFromServer(data) {
  defaultCardList = '';
  defaultCardList = new Section({
    data: data.reverse(), renderer: (item) => {
      defaultCardList.addItem(createCard(item));
    }
  }, cardListSelector);
  defaultCardList.renderItems();
}

function createCard(item) {
  const card = new Card(item, '.card-template', {
    handlePhotoClick: () => {
      cardPopup.open(item.name, item.link);
    },
    handleDeleteClick: () => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmitAction(() => {
        api.deleteCardFromServer(item)
          .then(() => {
            card.deleteCard();
          })
      });
    },
    handleAddLike: (item) => {
      api.setLikeOnServer(item._id)
        .then((result) => {
          card.addLike(result);
        })
    },
    handleDeleteLike: (item) => {
      api.deleteLikeFromServer(item._id)
        .then((result) => {
          card.deleteLike(result);
        })
    }
  }, userID);
  return card.generateCard();
}

function handleAvatarFormSubmit(url) {
  avatarPopup.updateLoading(true);
  api.setAvatarOnServer(url.ava_link)
    .then((data) => {
      avatarContainer.style.backgroundImage = `url('${data.avatar}')`;
    })
    .finally(() => {
      avatarPopup.updateLoading(false);
      avatarPopup.close();
    })
}

function handleProfileFormSubmit(data) {
  profilePopup.updateLoading(true);
  api.setUserInfoOnServer(data.name, data.about)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .finally(() => {
      profilePopup.updateLoading(false);
      profilePopup.close();
    });
}

function handlePhotoFormSubmit(data) {
  photoPopup.updateLoading(true);
  api.setCardOnServer(data)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      defaultCardList.addItem(createCard(data))
    })
    .finally(() => {
      photoPopup.updateLoading(false);
      photoPopup.close();
    });
}

profileEditButton.addEventListener('click', function () {
  formValidators['profile_form'].resetValidationFields();
  const profileData = userInfo.getUserInfo();
  profileInputName.value = profileData.name;
  profileInputJob.value = profileData.job;
  profilePopup.open();
});
photoAddButton.addEventListener('click', function () {
  formValidators['photo_form'].resetValidationFields();
  photoPopup.open();
});
editAvaButton.addEventListener('click', function () {
  formValidators['ava_form'].resetValidationFields();
  avatarPopup.open();
});
cardPopup.setEventListeners();
profilePopup.setEventListeners();
photoPopup.setEventListeners();
deleteCardPopup.setEventListeners();
avatarPopup.setEventListeners();
enableValidation(validationConfig);

Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
  .then(([info, data]) => {
    setUserID(info._id);
    fillProfileInfo(info);
    renderCardsFromServer(data);
  });
