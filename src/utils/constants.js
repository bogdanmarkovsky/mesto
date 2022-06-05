const arkhyzImage = new URL('../images/arkhyz.jpg', import.meta.url);
const chelybinskImage = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatkaImage = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorskyImage = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('../images/baikal.jpg', import.meta.url);
export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyzImage,
  },
  {
    name: 'Челябинская область',
    link: chelybinskImage,
  },
  {
    name: 'Иваново',
    link: ivanovoImage,
  },
  {
    name: 'Камчатка',
    link: kamchatkaImage,
  },
  {
    name: 'Холмогорский район',
    link: kholmogorskyImage,
  },
  {
    name: 'Байкал',
    link: baikalImage,
  }
];

export const validationConfig = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__field',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
  submitButtonClass: '.popup-form__submit-button',
};
