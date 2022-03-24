"use strict";
document.querySelector(".youtube").textContent = "0";
document.querySelector(".twitters").textContent = "0";
document.querySelector(".facebook").textContent = "0";
let i = 0,
  j = 0,
  k = 0;
let twiterInterval = setInterval(function () {
  k += 50;
  document.querySelector(".twitters").textContent = k;
  if (k == 12000) {
    clearInterval(twiterInterval);
  }
}, 5);
let youtubeInterval = setInterval(function () {
  i += 50;
  document.querySelector(".youtube").textContent = i;
  if (i == 5000) {
    clearInterval(youtubeInterval);
  }
}, 12);
let facebookInterval = setInterval(function () {
  j += 50;
  document.querySelector(".facebook").textContent = j;
  if (j == 7500) {
    clearInterval(facebookInterval);
  }
}, 8);
