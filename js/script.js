'use strict';

// Зацикливание анимации стрелки 

const arrow = document.querySelector(`.sticky--arrow`);
const round = document.querySelector(`.sticky-round`);

setInterval(() => {
    arrow.classList.add(`animate__infinite`);
    round.classList.add(`animate__infinite`);
    
    setTimeout(() => {
        arrow.classList.remove(`animate__infinite`);
        round.classList.remove(`animate__infinite`);
    },1001);

}, 5000);


// Появление кнопки при прокручивании

const startButton = document.querySelector(`.sticky--button`);

const showStartButton = () => {
    arrow.classList.add(`hidden`);
    round.classList.add(`hidden`);
    startButton.style.display = `block`;
};

window.addEventListener(`scroll`, showStartButton);


// Появление, валидация и закрытие форм 

const overlay = document.querySelector(`.overlay`);
const greeting = document.querySelector(`.greeting`);
const firstQuestion = overlay.querySelector(`.question--first`);
const secondQuestion = overlay.querySelector(`.question--second`);
const thirdQuestion = overlay.querySelector(`.question--third`);
const firstButtonNo = firstQuestion.querySelector(`.button--failure`);
const firstButtonYes = firstQuestion.querySelector(`.button--conset`);
const secondButtonNo = secondQuestion.querySelector(`.button--failure`);
const secondButtonYes = secondQuestion.querySelector(`.button--conset`);
const thirdButtonNo = thirdQuestion.querySelector(`.button--failure`);
const thirdButtonYes = thirdQuestion.querySelector(`.button--conset`);
const firstForm = overlay.querySelector(`.search-form--first`); 
const firstSubmit = firstForm.querySelector(`.search-form__submit`);
const secondForm = overlay.querySelector(`.search-form--second`); 
const secondSubmit = secondForm.querySelector(`.search-form__submit`);
const thirdForm = overlay.querySelector(`.search-form--third`); 
const thirdSubmit = thirdForm.querySelector(`.search-form__submit`);
const fourthForm = overlay.querySelector(`.search-form--fourth`); 
const fourthSubmit = fourthForm.querySelector(`.search-form__submit`);
const fifthForm = overlay.querySelector(`.search-form--fifth`); 
const fifthSubmit = fifthForm.querySelector(`.search-form__submit`);

const NAME_REGEX = /^([a-zA-Z]|\s)+$/;
const nameInput = secondForm.querySelector(`.name-input`);
const invalidNameText = secondForm.querySelector(`.search-form__name-invalid`);

const month = thirdForm.querySelector(`.select-input--month`);
const day = thirdForm.querySelector(`.select-input--day`);
const year = thirdForm.querySelector(`.select-input--year`);
const invalidDate = thirdForm.querySelector(`.search-form__date-invalid`);

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const emailInput = fourthForm.querySelector(`.email-input`);
const invalidEmailText = fourthForm.querySelector(`.search-form__email-invalid`);

const passwordInput = fifthForm.querySelector(`.password-input`);
const checkInput = fifthForm.querySelector(`.search-form__checkbox`);
const togglePassword = fifthForm.querySelector(`.search-form__toggle-password`);
const invalidPasswordText = fifthForm.querySelector(`.search-form__password-invalid`);
const invalidChecboxText = fifthForm.querySelector(`.search-form__check-invalid`); 
const checkboxBorder = fifthForm.querySelector(`.search-form__agreement`);




document.addEventListener(`click`, (evt) => {
    if (!evt.target.closest(`.overlay`)) {
        if (overlay.classList.contains(`hidden`)) {
            overlay.classList.remove(`hidden`);
        }
        
        if (firstQuestion.classList.contains(`hidden`)) {
            firstQuestion.classList.remove(`hidden`);
        }

        if (!greeting.classList.contains(`hidden`)) {
            greeting.classList.add(`hidden`);
        };

        if (!startButton.classList.contains(`hidden`)) {
            startButton.classList.add(`hidden`);
        }
    };
});

firstButtonNo.addEventListener(`click`, () => {
    firstQuestion.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
    greeting.classList.remove(`hidden`);
    startButton.classList.remove(`hidden`);
});

firstButtonYes.addEventListener(`click`, () => {
    firstQuestion.classList.add(`hidden`);
    secondQuestion.classList.remove(`hidden`);
});

secondButtonNo.addEventListener(`click`, () => {
    secondQuestion.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
    greeting.classList.remove(`hidden`);
    startButton.classList.remove(`hidden`);
});

secondButtonYes.addEventListener(`click`, () => {
    secondQuestion.classList.add(`hidden`);
    thirdQuestion.classList.remove(`hidden`);
});

thirdButtonNo.addEventListener(`click`, () => {
    thirdQuestion.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
    greeting.classList.remove(`hidden`);
    startButton.classList.remove(`hidden`);
});

thirdButtonYes.addEventListener(`click`, () => {
    thirdQuestion.classList.add(`hidden`);
    firstForm.classList.remove(`hidden`);
});

firstSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    firstForm.classList.add(`hidden`);
    secondForm.classList.remove(`hidden`);
    nameInput.value = ``;
});

secondSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    
    if (nameInput.value && invalidNameText.classList.contains(`hidden`)) {
        secondForm.classList.add(`hidden`);
        thirdForm.classList.remove(`hidden`);
        month.value = ``;
        day.value = ``;
        year.value = ``;
    } else {
        
        if (invalidNameText.classList.contains(`hidden`)) {
            invalidNameText.classList.remove(`hidden`)
        };
        nameInput.style.outline = `none`;
        nameInput.style.border = `2px solid #F95656`;
    }
    
});

thirdSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    
    if (!month.value || !day.value || !year.value) {
        
        if (invalidDate.classList.contains(`hidden`)) {
            invalidDate.classList.remove(`hidden`)
        }
        
        month.style.outline = `none`;
        month.style.border = `2px solid #F95656`;
        day.style.outline = `none`;
        day.style.border = `2px solid #F95656`;
        year.style.outline = `none`;
        year.style.border = `2px solid #F95656`;
    } else {
        
        if (!invalidDate.classList.contains(`hidden`)) {
            invalidDate.classList.add(`hidden`)
        }
        month.style.border = `2px solid #343434`;
        day.style.border = `2px solid #343434`;
        year.style.border = `2px solid #343434`;
        thirdForm.classList.add(`hidden`);
        fourthForm.classList.remove(`hidden`);
        emailInput.value = ``;
    }
    
});

fourthSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    if (!EMAIL_REGEX.test(emailInput.value) || (emailInput.value = ``)) {
        if (invalidEmailText.classList.contains(`hidden`)) {
            invalidEmailText.classList.remove(`hidden`)
        };
        emailInput.style.outline = `none`;
        emailInput.style.border = `2px solid #F95656`;
    } else {
        emailInput.style.border = `2px solid #343434`;
        if (!invalidEmailText.classList.contains(`hidden`)) {
            invalidEmailText.classList.add(`hidden`)
        };
        fourthForm.classList.add(`hidden`);
        fifthForm.classList.remove(`hidden`);
        passwordInput.value = ``;
        checkInput.checked = false;
    }
});

fifthSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    
    let isPasswordSet = false
    let isCheckInputSet = false

    if (passwordInput.value.length > 7) {
        if (!invalidPasswordText.classList.contains(`hidden`)) {
            invalidPasswordText.classList.add(`hidden`);
        }
        passwordInput.style.border = `2px solid #343434`;
        isPasswordSet = true
    } else {
        if (passwordInput.value.length  <= 7) {
            if (invalidPasswordText.classList.contains(`hidden`)) {
                invalidPasswordText.classList.remove(`hidden`);
            }
            passwordInput.style.outline = `none`;
            passwordInput.style.border = `2px solid #F95656`;
        };
    }

    if (checkInput.checked) {
        if (!invalidChecboxText.classList.contains(`hidden`)) {
            invalidChecboxText.classList.add(`hidden`);
        }
        isCheckInputSet = true
    } else {
        if (!checkInput.checked) {
            if (invalidChecboxText.classList.contains(`hidden`)) {
                invalidChecboxText.classList.remove(`hidden`);
            }
            if (checkboxBorder.classList.contains(`search-form__agreement--normal`)) {
                checkboxBorder.classList.remove(`search-form__agreement--normal`);
                checkboxBorder.classList.add(`search-form__agreement--error`)
            }
        };
    };

    if (isPasswordSet && isCheckInputSet) {
        fifthForm.classList.add(`hidden`);
        overlay.classList.add(`hidden`);
        greeting.classList.remove(`hidden`);
        startButton.classList.remove(`hidden`);
    }
});

// Валидация имени 

nameInput.addEventListener(`input`, () => {

    if (!NAME_REGEX.test(nameInput.value)) {
        if (invalidNameText.classList.contains(`hidden`)) {
            invalidNameText.classList.remove(`hidden`)
        };
        nameInput.style.outline = `none`;
        nameInput.style.border = `2px solid #F95656`;
      } else {
        nameInput.style.border = `2px solid #343434`;
        if (!invalidNameText.classList.contains(`hidden`)) {
            invalidNameText.classList.add(`hidden`)
        };
      }
});

// Скрытие/открытие пароля

togglePassword.addEventListener(`click`, () => {
    if (passwordInput.classList.contains(`password-input--close`)) {
        passwordInput.classList.remove(`password-input--close`);
        passwordInput.classList.add(`password-input--open`);
        passwordInput.type = `text`;
    } else {
        passwordInput.classList.remove(`password-input--open`);
        passwordInput.classList.add(`password-input--close`);
        passwordInput.type = `password`;
    }
});

checkInput.addEventListener(`change`, () => {
    if (checkboxBorder.classList.contains(`search-form__agreement--error`)) {
        checkboxBorder.classList.remove(`search-form__agreement--error`);
        checkboxBorder.classList.add(`search-form__agreement--normal`);
    };
});