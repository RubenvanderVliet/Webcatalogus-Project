console.log('category-page loaded')

const catBtn1 = document.querySelector('.cat-btn-1');
const catBtn2 = document.querySelector('.cat-btn-2');

console.log(catBtn1);
console.log(catBtn2);

catBtn1.addEventListener('click', function () {
    window.open('/category-page/sub-category-page/sub-category-page-1.html', '_self')
});


catBtn2.addEventListener('click', function () {
    window.open('/category-page/sub-category-page/sub-category-page-2.html', '_self')
});
