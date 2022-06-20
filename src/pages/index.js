import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { validationConfig } from '../utils/constants';
import Popup from '../components/Popup';
import Api from '../components/Api';
const cardListSelector = '.photo-grid__cards';
const profileForm = document.forms.profile_form;
const profileEditButton = document.querySelector('.profile__edit-button');
const editAvaButton = document.querySelector('.profile__avatar');
const profileInputName = profileForm.elements.name;
const profileInputJob = profileForm.elements.about;
const photoAddButton = document.querySelector('.profile__add-photo-button');
const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const profilePopup = new PopupWithForm('.popup_profile-form', handleProfileFormSubmit);
const photoPopup = new PopupWithForm('.popup_photo-form', handlePhotoFormSubmit);
const avatarPopup = new PopupWithForm('.popup_change-ava', handleAvatarFormSubmit);
const cardPopup = new PopupWithImage('.popup_photo-card');
const deleteCardPopup = new PopupWithConfirmation('.popup_delete-card');
const avatarContainer = document.querySelector('.profile__avatar');
const formValidators = {};
const api = new Api();
let defaultCardList;
export let userID = '';

function getUserID(id) {
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

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

function fillProfileFields() {
  api.getUserInfoFromServer()
    .then((result) => {
      console.log(result);
      userInfo.setUserInfo(result);
      profileInputName.value = userInfo.getUserInfo().name;
      profileInputJob.value = userInfo.getUserInfo().job;
    })
    .catch((err) => {
      console.log(err)
    });
}

function renderAvatar() {
  api.getAvatarFromServer()
    .then((result) => {
      avatarContainer.style.backgroundImage = `url('${result.avatar}')`;
    })
    .catch((err) => {
      console.log(err)
    });
}

function createCard(item) {
  const card = new Card(item, '.card-template', handlePhotoClick, handleDeleteClick, handleLikeCard);
  return card.generateCard();
}

function deleteCardFromServerAndDOM(id, element) {
  api.deleteCardFromServer(id)
    .then((result) => {
      if (result.ok) {
        element.remove();
        element = null;
      }
    })
    .catch((err) => {
      console.log(err)
    });
}

function checkOwnerLike(item, userid) {
  if (item.likes.length === 0) {
    return true;
  } else {
    let counter = 0;
    for (let i = 0; i < item.likes.length; i++) {
      if (item.likes[i]._id !== userid) {
        counter += 1;
      }
    }
    if (counter === item.likes.length) {
      return true;
    } else {
      return false;
    }
  }
}

function updateLoading(button, isLoading, messageBefore = "Сохранить", messageAfter = "Сохранение...") {
  if (isLoading) {
    button.textContent = messageAfter;
  } else {
    button.textContent = messageBefore;
  }
}

function handleDeleteClick(item, photocard) {
  deleteCardPopup.open();
  deleteCardPopup.setSubmitAction(() => {
    deleteCardFromServerAndDOM(item._id, photocard);
  });
}

function handleLikeCard(item, button, likecounter) {
  let isTrue = checkOwnerLike(item, userID);
  if (isTrue) {
    api.setLikeOnServer(item._id)
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        item.likes = data.likes;
        likecounter.textContent = data.likes.length;
        button.classList.add('photo-grid__like-button_active');
      });
  } else {
    api.deleteLikeFromServer(item._id)
      .then((result) => {
        if (result.ok) {
          return result.json();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        item.likes = data.likes;
        likecounter.textContent = data.likes.length;
        button.classList.remove('photo-grid__like-button_active');
      });
  }
}

function handleAvatarFormSubmit(url, button) {
  updateLoading(button, true);
  api.setAvatarOnServer(url.ava_link)
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      console.log(`"url('${data.avatar}')"`);
      avatarContainer.style.backgroundImage = `url('${data.avatar}')`;
    })
    .finally(() => {
      updateLoading(button, false);
    })
  avatarPopup.close();
}

function handleProfileFormSubmit(data, button) {
  updateLoading(button, true);
  api.setUserInfoOnServer(data.name, data.about)
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateLoading(button, false);
    });
  profilePopup.close();
}

function handlePhotoFormSubmit(data, button) {
  const newCardInputValues = {
    name: data.photo_caption,
    link: data.photo_link,
    owner: { _id: userID },
    likes: []
  };
  updateLoading(button, true);
  api.setCardOnServer(newCardInputValues)
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((data) => {
      newCardInputValues._id = data._id
      newCardInputValues.likes = data.likes
      defaultCardList.addItem(createCard(newCardInputValues))
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      updateLoading(button, false);
    });
  photoPopup.close();
}

function handlePhotoClick(name, link) {
  cardPopup.open(name, link);
}

profileEditButton.addEventListener('click', function () {
  formValidators['profile_form'].resetValidationFields();
  profileInputName.value = userInfo.getUserInfo().name;
  profileInputJob.value = userInfo.getUserInfo().job;
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
fillProfileFields();
renderAvatar();
Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
  .then(([info, data]) => {
    getUserID(info._id);
    renderCardsFromServer(data);
  });
