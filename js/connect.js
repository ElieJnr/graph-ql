import { auth, fetchGraphQLData } from "./auth.js";
import { landingPage, loginForm } from "./templates.js";

function checkTokenAndServePage() {
    const token = localStorage.getItem('authToken');
    if (token) {
        fetchGraphQLData(token)
    } else {
        serveLogin()
    }
}
let body = document.body

export function serveLogin() {
    body.innerHTML = landingPage
    let bouton = document.getElementsByClassName('connect-button')[0]
    let view = document.getElementsByClassName('details-button')[0]

    bouton.addEventListener('click', handleButtonClick);
    view.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
    const body = document.getElementsByClassName('main-container')[0];
    let login = document.createElement('div');
    login.innerHTML = loginForm;
    login.style.animation = 'fadeIn 1s forwards';
    body.appendChild(login);
    close(login);
    auth();
}

function close(div) {
    const closeButton = document.getElementsByClassName('close-button')[0]

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            div.style.animation = 'fadeOut 1s forwards';
            setTimeout(() => {
                div.remove();
            }, 1000);
        })
    }
    const formContainer = document.getElementsByClassName('div-form-container')[0];
    const noClose = document.getElementsByClassName('noclose')[0];

    formContainer.addEventListener('click', function (event) {
        if (!noClose.contains(event.target)) {
            formContainer.style.animation = 'fadeOut 1s forwards';
            setTimeout(() => {
                div.remove();
            }, 1000);
        }
    });
    viewPassword();
}


function viewPassword() {
    const svgIcon = document.querySelector('.password');
    const passwordInput = document.getElementById('password_field');

    svgIcon.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
}


const token = localStorage.getItem('authToken')
if (token) {
    // let disconnect = document.getElementsByClassName('disconnect-button')[0]
    document.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('unregistered')) {
            localStorage.removeItem('authToken');
            serveLogin();
        }
    });
}

checkTokenAndServePage();