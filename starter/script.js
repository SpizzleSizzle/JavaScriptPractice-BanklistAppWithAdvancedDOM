'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ============================Lecture============================

// console.log(document.querySelectorAll('.btn'));
// console.log(document.getElementsByClassName('btn'));
// console.log(document.getElementsByTagName('button'));

// const myHTML = '<b>This is a <i>new</i> stuff</b>';

// modal.insertAdjacentHTML('afterbegin', myHTML);

const message = document.createElement('h1');
message.classList.add('cookie-message');

message.innerHTML =
  '<span>This is a cookie message</span><button class="btn btn--close-cookie">Take a cookie</button>';

const header = document.querySelector('header');
header.prepend(message);
// header.append(message);

const cookieBtn = document.querySelector('.btn--close-cookie');

cookieBtn.addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.display);
// console.log(getComputedStyle(message).display);

// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'purple');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.src);
console.log(logo.getAttribute('myAttribute'));

console.log(logo.getAttribute('src'));

const twitterLink = document.querySelector('.twitter-link');
console.log(twitterLink.href);
console.log(twitterLink.getAttribute('href'));

//Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
// console.log(logo.classList);
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle;
// logo.classList.contains();

// const opBtn = document.querySelector('.operations__tab--3');
// console.log(opBtn.className);

// const testBtn = document.querySelector('.test-button');
// opBtn.className.split(' ').forEach(cur => testBtn.classList.add(cur));
