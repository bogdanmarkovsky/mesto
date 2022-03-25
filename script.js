let popUp = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
editButton.addEventListener('click', function () {
  popUp.classList.add('popup_opened');
});

const closeForm = () => {
  popUp.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeForm);

let submitButton = document.querySelector('.popup__save-button');
let nameDefault = document.querySelector('.profile__title');
let jobDefault = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__field_first');
let jobInput = document.querySelector('.popup__field_second');
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameDefault.textContent = nameInput.value;
  jobDefault.textContent = jobInput.value;
  closeForm();
}
submitButton.addEventListener('click', formSubmitHandler);

for (let likeButton of document.querySelectorAll('.like-button')) {
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle('like-button_active');
  });
}
