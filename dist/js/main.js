'use strict';

// Header nav effect
var header = document.querySelector('.header');
var headerHoverEffect = document.querySelector('.header__hover');

console.log('header', header);

header.onmousemove = function (e) {
  headerHoverEffect.style.transform = 'translateX(' + (e.clientX - 50) + 'px';
};

header.onmouseenter = function () {
  headerHoverEffect.classList.add('header__hover_active');
};

header.onmouseleave = function () {
  headerHoverEffect.classList.remove('header__hover_active');
};