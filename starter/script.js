'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
///////////////////////////////////////
// Modal window

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
//////////////////////////////////////////////////////////////
// Smooth Scrolling Button

btnScrollTo.addEventListener('click', function (e) {
  // Modern method 1
  // window.scrollBy({
  //   left: s1Coodinates.left,
  //   top: s1Coodinates.top,
  //   behavior: 'smooth',
  // });

  // Modern method 2
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////
// Smooth Scrolling Navigation
// Method with event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // 按照类名查找按钮元素

  if (!clicked) return; // 如果找不到目标元素，提前返回函数

  // 先去除所有active样式
  tabs.forEach(cur => cur.classList.remove('operations__tab--active'));
  tabsContent.forEach(cur =>
    cur.classList.remove('operations__content--active')
  );

  // 添加active样式
  clicked.classList.add('operations__tab--active');
  tabsContent[clicked.getAttribute('data-tab') - 1].classList.add(
    'operations__content--active'
  );
});

// Straight Forward Method
// document.querySelectorAll('.nav__link').forEach(function (cur) {
//   cur.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent the anchor from auto scrolling
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// ============================Lecture============================

// console.log(document.querySelectorAll('.btn'));
// console.log(document.getElementsByClassName('btn'));
// console.log(document.getElementsByTagName('button'));

// const myHTML = '<b>This is a <i>new</i> stuff</b>';

// modal.insertAdjacentHTML('afterbegin', myHTML);

// // Cookie button
// const message = document.createElement('h1');
// message.classList.add('cookie-message');

// message.innerHTML =
//   '<span>This is a cookie message</span><button class="btn btn--close-cookie">Take a cookie</button>';

// const header = document.querySelector('header');
// header.prepend(message);
// // header.append(message);

// const cookieBtn = document.querySelector('.btn--close-cookie');

// cookieBtn.addEventListener('click', function () {
//   // message.remove();
//   message.parentElement.removeChild(message);
// });

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

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.src);
// console.log(logo.getAttribute('myAttribute'));

// console.log(logo.getAttribute('src'));

// const twitterLink = document.querySelector('.twitter-link');
// console.log(twitterLink.href);
// console.log(twitterLink.getAttribute('href'));

// //Data Attributes
// console.log(logo.dataset.versionNumber);

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

// // Event Listening

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: You are reading the heading');
// };
// const logH1Event = function (e) {
//   console.log(e);
// };

// h1.addEventListener('mouseenter', alertH1, logH1Event);
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 5000);

// h1.onmousedown = function (e) {
//   alert('onmousedown: You are reading the heading');
//   console.log(e);
// };

// // Event Bubbling
// const randomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () =>
//   `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });

// // DOM Traversing
// const h1 = document.querySelector('h1');

// // select downwards: child
// // console.log(h1.querySelectorAll('.highlight'));
// // console.log(h1.childNodes);
// // console.log(h1.children);
// h1.firstElementChild.style.color = 'blue';
// h1.lastElementChild.style.color = 'orange';

// // select upwoards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--color-primary-darker)';

// select sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// const allSiblings = [...h1.parentElement.children];
// allSiblings.forEach(function (cur) {
//   if (cur !== h1) {
//     cur.style.transform = 'scale(0.5)';
//   }
// });
