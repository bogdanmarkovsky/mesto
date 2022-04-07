const profilePopup = document.querySelector('.popup_profile-form');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profile-form-close-button');
const profileForm = document.querySelector('#profile-form');
const profileDefaultName = document.querySelector('.profile__title');
const profileDefaultJob = document.querySelector('.profile__subtitle');
const profileInputName = document.querySelector('.popup-form__field_type_name');
const profileInputJob = document.querySelector('.popup-form__field_type_job');
const photoPopup = document.querySelector('.popup_photo-form');
const photoAddButton = document.querySelector('.profile__add-photo-button');
const photoCloseButton = document.querySelector('#photo-form-close-button');
const photoForm = document.querySelector('#photo-form');
const photoInputCaption = document.querySelector('.popup-form__field_type_caption');
const photoInputLink = document.querySelector('.popup-form__field_type_link');
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

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const createCard = (text, src) => {
  const photoCard = cardTemplate.querySelector('.photo-grid__card').cloneNode(true);
  const cardImage = photoCard.querySelector('.photo-grid__card-image');
  cardImage.src = src;
  cardImage.alt = text;
  photoCard.querySelector('.photo-grid__card-text').textContent = text;
  photoCard.querySelector('.photo-grid__like-button').addEventListener('click', function () {
    this.classList.toggle('photo-grid__like-button_active');
  });
  photoCard.querySelector('.photo-grid__remove-button').addEventListener('click', function () {
    photoCard.remove();
  });
  cardImage.addEventListener('click', function () {
    const popupImage = cardPopup.querySelector('.popup__image');
    popupImage.src = src;
    popupImage.alt = text;
    cardPopup.querySelector('.popup__caption').textContent = text;
    openPopup(cardPopup);
  });
  return photoCard;
}

const renderCard = (text, src) => {
  cardContainer.prepend(createCard(text, src));
}

const profileFormSubmitHandler = (evt) => {
  evt.preventDefault();
  profileDefaultName.textContent = profileInputName.value;
  profileDefaultJob.textContent = profileInputJob.value;
  closePopup(profilePopup);
}

const photoFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard(photoInputCaption.value, photoInputLink.value);
  closePopup(photoPopup);
  photoInputLink.value = '';
  photoInputCaption.value = '';
}

profileEditButton.addEventListener('click', function () {
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
  openPopup(profilePopup);
});
profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
  profileInputName.value = profileDefaultName.textContent;
  profileInputJob.value = profileDefaultJob.textContent;
});
profileForm.addEventListener('submit', profileFormSubmitHandler);
photoAddButton.addEventListener('click', function () {
  openPopup(photoPopup);
});
photoCloseButton.addEventListener('click', function () {
  closePopup(photoPopup);
  photoInputLink.value = '';
  photoInputCaption.value = '';
});
photoForm.addEventListener('submit', photoFormSubmitHandler);
cardCloseButton.addEventListener('click', function () {
  closePopup(cardPopup);
});

initialCards.forEach(element => {
  renderCard(element.name, element.link);
});
