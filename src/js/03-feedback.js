import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM = 'feedback-form-state';

const formData = {};
populateFormData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (form.email.value !== '' && form.message.value !== '') {
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM);
    return;
  }
  alert('Please fill in all fields');
}

function populateFormData() {
  const populateFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  if (populateFormData) {
    form.email.value = populateFormData.email || '';
    form.message.value = populateFormData.message || '';
    formData.email = form.email.value;
    formData.message = form.message.value;
  }
}
