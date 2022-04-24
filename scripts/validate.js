const listOfValidationElements = {
  formSelector: '.popup-form',
  inputSelector: '.popup-form__field',
  submitButtonSelector: '.popup-form__submit-button',
  inactiveButtonClass: 'popup-form__submit-button_disabled',
  inputErrorClass: 'popup-form__field_type_error',
  errorClass: 'popup-form__error_visible'
};

function enableValidation(object) {
  document.querySelectorAll(object.formSelector).forEach((form) => {
    form.addEventListener('input', () => {
      setSubmitButtonState(form, object);
    });
    form.querySelectorAll(object.inputSelector).forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, object);
      });
    });
  });
};

function checkInputValidity(element, object) {
  if (element.validity.valid) {
    hideInputError(element, object);
  } else {
    showInputError(element, object);
  }
};

function showInputError(element, object) {
  const errorElement = document.querySelector(`.${element.id}-error`);
  errorElement.textContent = element.validationMessage;
  errorElement.classList.add(object.errorClass);
  element.classList.add(object.inputErrorClass);
};

function hideInputError(element, object) {
  const errorElement = document.querySelector(`.${element.id}-error`);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = '';
  element.classList.remove(object.inputErrorClass);
};

function setSubmitButtonState(form, object) {
  const submitButton = document.getElementById(`${form.id}-submit-button`);
  if (form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(object["inactiveButtonClass"]);
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add(object["inactiveButtonClass"]);
  }
};

function resetValidationFields(popup, object) {
  popup.querySelectorAll(object.inputSelector).forEach((input) => {
    hideInputError(input, object);
  });
  setSubmitButtonState(popup, object);
};

enableValidation(listOfValidationElements);
