const listOfValidationElements = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__field',
  submitButtonSelector: '.popup-form__submit-button',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
};

function enableValidation(object) {
  document.querySelectorAll(object.formSelector).forEach((form) => {
    const submitButton = document.getElementById(`${form.id}-submit-button`);
    form.querySelectorAll(object.inputSelector).forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, object);
        setSubmitButtonState(form, submitButton, object);
      });
    });
  });
}

function checkInputValidity(element, object) {
  if (element.validity.valid) {
    hideInputError(element, object);
  } else {
    showInputError(element, object);
  }
}

function showInputError(element, object) {
  const errorElement = document.querySelector(`.${element.id}-error`);
  errorElement.textContent = element.validationMessage;
  element.classList.add(object.inputErrorClass);
}

function hideInputError(element, object) {
  const errorElement = document.querySelector(`.${element.id}-error`);
  errorElement.textContent = '';
  element.classList.remove(object.inputErrorClass);
}

function setSubmitButtonState(form, button, object) {
  if (form.checkValidity()) {
    button.removeAttribute('disabled');
    button.classList.remove(object.inactiveButtonClass);
  } else {
    button.setAttribute('disabled', true);
    button.classList.add(object.inactiveButtonClass);
  }
}

function resetValidationFields(popup, button, object) {
  popup.querySelectorAll(object.inputSelector).forEach((input) => {
    hideInputError(input, object);
  });
  setSubmitButtonState(popup, button, object);
}

enableValidation(listOfValidationElements);
