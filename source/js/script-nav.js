const makeMenu = () => {

  const navMain = document.querySelector('.nav__main');
const navToggle = document.querySelector('.nav__button-burger');


navMain.classList.remove('nav__main--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav__main--closed')) {
    navMain.classList.remove('nav__main--closed');
    navMain.classList.add('nav__main--opened');
  } else {
    navMain.classList.add('nav__main--closed');
    navMain.classList.remove('nav__main--opened');
  }
});

//   let navMain = document.querySelector('.main-nav');
//   let navToggle = document.querySelector('.main-nav__toggle');

//   navMain.classList.remove('main-nav--nojs');

//   navMain.classList.remove('main-nav--opened');
//   navMain.classList.add('main-nav--closed');

//   navToggle.addEventListener('click', function () {
//     if (navMain.classList.contains('main-nav--opened')) {
//       navMain.classList.remove('main-nav--opened');
//       navMain.classList.add('main-nav--closed');
//     } else {
//       navMain.classList.add('main-nav--opened');
//       navMain.classList.remove('main-nav--closed');
//     }
//   });

};

export { makeMenu };

