'use strict';

(function () {
  var container = document.querySelector('.page-footer__container');
  var menu = document.querySelector('.footer-menu');
  var address = document.querySelector('.address');

  var switchEffect = function (blockopen, blockclose) {
    if (blockopen.classList.contains('toggle--closed')) {
      blockopen.classList.remove('toggle--closed');
      blockopen.classList.add('toggle--opened');
      blockclose.classList.remove('toggle--opened');
      blockclose.classList.add('toggle--closed');
    } else {
      blockopen.classList.add('toggle--closed');
      blockopen.classList.remove('toggle--opened');
    }
  };

  var onClickEffect = function (evt) {
    switch (true) {
      case evt.target.classList.contains('toggle--menu'):
        switchEffect(menu, address);
        break;
      case evt.target.classList.contains('toggle--address'):
        switchEffect(address, menu);
        break;
    }
  };

  container.addEventListener('click', onClickEffect);
})();
