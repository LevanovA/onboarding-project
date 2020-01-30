'use strict';

(function () {
  var inputText = document.querySelector('.modal__item input[type="text"]');
  var inputTel = document.querySelector('.modal__item input[type="tel"]');
  var inputComment = document.querySelector('.modal__comment textarea');

  var onChangeInput = function () {
    localStorage.setItem('name', inputText.value);
    localStorage.setItem('tel', inputTel.value);
    localStorage.setItem('comment', inputComment.value);
  };

  var onGetValue = function () {
    inputText.value = localStorage.getItem('name');
    inputTel.value = localStorage.getItem('tel');
    inputComment.value = localStorage.getItem('comment');
  };

  inputText.addEventListener('input', onChangeInput);
  inputText.addEventListener('focus', onGetValue);
  inputTel.addEventListener('input', onChangeInput);
  inputTel.addEventListener('focus', onGetValue);
  inputComment.addEventListener('input', onChangeInput);
  inputComment.addEventListener('focus', onGetValue);
})();
