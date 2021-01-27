/*jshint esversion: 6 */
/* jshint browser: true */

var filterBtn = document.querySelector('#filter-tbn');
var sortBtn = document.querySelector('#sort-btn');
var sortSelect = document.querySelector('#sort');

sortBtn.addEventListener('click', simulateClick);

function simulateClick() {
    sortSelect.click();
}