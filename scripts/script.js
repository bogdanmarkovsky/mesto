let popUp = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.popup__save-button');
let defaultName = document.querySelector('.profile__title');
let defaultJob = document.querySelector('.profile__subtitle');
let inputName = document.querySelector('.popup__field_type_name');
let inputJob = document.querySelector('.popup__field_type_job');

const openForm = () => {
  popUp.classList.add('popup_opened');
  inputName.setAttribute('value', defaultName.textContent);
  inputJob.setAttribute('value', defaultJob.textContent);
}
const closeForm = () => {
  popUp.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  defaultName.textContent = inputName.value;
  defaultJob.textContent = inputJob.value;
  closeForm();
}

editButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
popUp.addEventListener('submit', formSubmitHandler);
