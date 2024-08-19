let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let signupForm = document.querySelector('.header .signup-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    signupForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    contactInfo.classList.remove('active');
};

// Sign Up navigation
document.querySelector('#signup-link').onclick = (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
};

document.querySelector('#login-link').onclick = (e) => {
    e.preventDefault();
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
};

// Password Policy Enforcement with Popup Alert
const passwordInput = document.querySelector('.signup-form .password');
const passwordMessage = document.querySelector('.signup-form .password-message');
const signupButton = document.querySelector('.signup-form .btn');

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let message = '';
    if (password.length < minLength) {
        message += `Password must be at least ${minLength} characters long. `;
    }
    if (!hasUpperCase) {
        message += 'Password must contain at least one uppercase letter. ';
    }
    if (!hasLowerCase) {
        message += 'Password must contain at least one lowercase letter. ';
    }
    if (!hasNumber) {
        message += 'Password must contain at least one number. ';
    }
    if (!hasSpecialChar) {
        message += 'Password must contain at least one special character. ';
    }

    passwordMessage.textContent = message;

    if (message === '') {
        passwordMessage.textContent = 'Password is strong.';
    }
});

// Popup alert for invalid password
signupButton.addEventListener('click', function(e) {
    const password = passwordInput.value;
    const passwordMessageText = passwordMessage.textContent;

    // If there is an error message, prevent form submission and show the popup
    if (passwordMessageText !== 'Password is strong.') {
        e.preventDefault(); // Prevent form submission
        alert('Password does not meet the required criteria:\n' + passwordMessageText);
    }
});

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});
