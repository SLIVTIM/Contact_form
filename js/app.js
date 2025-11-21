const firstNameInput = document.getElementById('First-name');
const lastNameInput = document.getElementById('Last-name');
const emailInput = document.getElementById('Email');
const choice1 = document.querySelector('.option-1');
const choice2 = document.querySelector('.option-2');
const indicator1 = document.querySelector('.indicator-1');
const indicator2 = document.querySelector('.indicator-2');
const checkbox = document.getElementById('checkbox');
const messageInput = document.getElementById('message');
const submit = document.querySelector('.submit');

let queryChoice = 'not specifiec';

let checkBoxChoice = 'not checked';

let userData = {};

choice1.addEventListener('click', function() {
    queryChoice = "General Enquiry";
    indicator1.classList.toggle('active');
    indicator2.classList.remove('active');
});

choice2.addEventListener('click', function() {
    queryChoice = "Support Request";
    indicator1.classList.remove('active');
    indicator2.classList.toggle('active');
});

checkbox.addEventListener('click', function() {
    if (checkBoxChoice === 'not checked') {
        checkBoxChoice = 'checked'
    }else if (checkBoxChoice === 'checked') {
        checkBoxChoice = 'not checked'
    }
});

submit.addEventListener('click', function(event) {
    saveInputData();
    event.preventDefault();
});

function saveInputData() {
    let nameValue = firstNameInput.value;
    let lastNameValue = lastNameInput.value;
    let emailValue = emailInput.value;
    let quaeryValue = queryChoice;
    let checkBoxValue = checkBoxChoice;
    let messageValue = messageInput.value;

    userData = {
        Name: nameValue,
        Last_Name: lastNameValue,
        Email: emailValue,
        QueryChoice: quaeryValue,
        CheckBox: checkBoxValue,
        AdditionalMessage: messageValue
    };

    console.log('Data Submited');
    console.log(`Name: ${nameValue}`);
    console.log('Last Name: ' + lastNameValue);
    console.log('Email: ' + emailValue);
    console.log('Query Choice: ' + quaeryValue);
    console.log('CheckBox: ' + checkBoxValue);
    console.log('Additional Message: ' + messageValue);
}