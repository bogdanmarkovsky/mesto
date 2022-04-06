const profilePopUp = document.querySelector('.profile-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('.profile-popup__close-button');
const profileSubmitButton = document.querySelector('.profile-popup__save-button');
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = document.querySelector('.profile-popup__field_type_name');
const profileInputJob = document.querySelector('.profile-popup__field_type_job');
const photoPopUp = document.querySelector('.photo-popup');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const photoCloseButton = document.querySelector('.photo-popup__close-button');
const photoInputCaption = document.querySelector('.photo-popup__field_type_caption');
const photoInputLink = document.querySelector('.photo-popup__field_type_link');
const cardPopUp = document.querySelector('.card-popup');
const cardImage = document.querySelector('.photo-grid__card-image');
const cardCloseButton = document.querySelector('.card-popup__close-button');
const cardTemplate = document.querySelector('#card-template').content;
const photoCards = document.querySelector('.photo-grid__cards');

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

const addCard = (text, src, isInsertBefore = true) => {
  const photoCard = cardTemplate.querySelector('.photo-grid__card').cloneNode(true);
  photoCard.querySelector('.photo-grid__card-image').src = src;
  photoCard.querySelector('.photo-grid__card-image').alt = text;
  photoCard.querySelector('.photo-grid__card-text').textContent = text;
  photoCard.querySelector('.photo-grid__like-button').addEventListener('click', function () {
    this.classList.toggle('photo-grid__like-button_active');
  });
  photoCard.querySelector('.photo-grid__remove-button').addEventListener('click', function () {
    photoCard.remove();
  });
  photoCard.querySelector('.photo-grid__card-image').addEventListener('click', function () {
    cardPopUp.classList.add('card-popup_opened');
    cardPopUp.querySelector('.card-popup__image').src = src;
    cardPopUp.querySelector('.card-popup__caption').textContent = text;
  });
  if (isInsertBefore) {
    photoCards.prepend(photoCard);
  } else {
    photoCards.append(photoCard);
  }
}

const openProfileForm = () => {
  profilePopUp.classList.add('profile-popup_opened');
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
}

const closeProfileForm = () => {
  profilePopUp.classList.remove('profile-popup_opened');
}

const profileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closeProfileForm();
}

const openPhotoForm = () => {
  photoPopUp.classList.add('photo-popup_opened');
}

const closePhotoForm = () => {
  photoInputLink.value = '';
  photoInputCaption.value = '';
  photoPopUp.classList.remove('photo-popup_opened');
}

const photoFormSubmitHandler = (evt) => {
  evt.preventDefault();
  addCard(photoInputCaption.value, photoInputLink.value);
  closePhotoForm();
}

const closePhotoCard = () => {
  cardPopUp.classList.remove('card-popup_opened');
}

profileEditButton.addEventListener('click', openProfileForm);
profileCloseButton.addEventListener('click', closeProfileForm);
profilePopUp.addEventListener('submit', profileFormSubmitHandler);
photoAddButton.addEventListener('click', openPhotoForm);
photoCloseButton.addEventListener('click', closePhotoForm);
photoPopUp.addEventListener('submit', photoFormSubmitHandler);
cardCloseButton.addEventListener('click', closePhotoCard);

initialCards.forEach(element => {
  addCard(element.name, element.link, false);
});
