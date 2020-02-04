'use strict';

(function () {
  var container = document.querySelector('.page-footer__container');
  var toggleMenu = document.querySelector('.toggle--menu');
  var toggleAddress = document.querySelector('.toggle--address');
  var menu = document.querySelector('.footer-menu');
  var address = document.querySelector('.address');

  var switchEffect = function (effectopen, effectclose) {
    if (effectopen.classList.contains('toggle--closed')) {
      effectopen.classList.remove('toggle--closed');
      effectclose.classList.add('toggle--closed');
    } else {
      effectopen.classList.add('toggle--closed');
    }
  };

  var showBlock = function (blockopen, blockclose) {
    switch (true) {
      case blockopen.classList.contains('footer-menu--closed'):
        blockopen.classList.remove('footer-menu--closed');
        blockopen.classList.add('footer-menu--opened');
        blockclose.classList.remove('address--opened');
        blockclose.classList.add('address--closed');
        break;
      case blockopen.classList.contains('footer-menu--opened'):
        blockopen.classList.remove('footer-menu--opened');
        blockopen.classList.add('footer-menu--closed');
        break;
      case blockopen.classList.contains('address--closed'):
        blockopen.classList.remove('address--closed');
        blockopen.classList.add('address--opened');
        blockclose.classList.remove('footer-menu--opened');
        blockclose.classList.add('footer-menu--closed');
        break;
      case blockopen.classList.contains('address--opened'):
        blockopen.classList.remove('address--opened');
        blockopen.classList.add('address--closed');
        break;
    }
  };

  var onClickEffect = function (evt) {
    switch (true) {
      case evt.target.classList.contains('toggle--menu'):
        switchEffect(toggleMenu, toggleAddress);
        showBlock(menu, address);
        break;
      case evt.target.classList.contains('toggle--address'):
        switchEffect(toggleAddress, toggleMenu);
        showBlock(address, menu);
        break;
    }
  };

  container.addEventListener('click', onClickEffect);
})();
