var main_nav = document.querySelector('.main-nav');
var main_nav_toggle = document.querySelector('.page-header__toggle');
main_nav.classList.remove('main-nav--nojs');
main_nav_toggle.addEventListener('click', function () {
  if (main_nav.classList.contains('main-nav--closed')) {
    main_nav.classList.remove('main-nav--closed');
    main_nav.classList.add('main-nav--open');
    main_nav_toggle.classList.remove('page-header__toggle--open');
    main_nav_toggle.classList.add('page-header__toggle--closed');
  }
  else {
    main_nav.classList.add('main-nav--closed');
    main_nav.classList.remove('main-nav--open');
    main_nav_toggle.classList.remove('page-header__toggle--closed');
    main_nav_toggle.classList.add('page-header__toggle--open');
  }
});
