console.log('sub-category-page loaded')
console.log('category-page loaded')

const catBtn = document.querySelector('.cat-btn-1');
const catBtnTwo = document.querySelector('.cat-btn-2');
const catBtnThree = document.querySelector('.cat-btn-3');

console.log(catBtn)

console.log(catBtnTwo)

console.log(catBtnThree)

catBtn.addEventListener('click', function () {
    window.open('/category-page/sub-category-page/product-pagina/product-pagina-2.html', '_self')
});


catBtnTwo.addEventListener('click', function () {
    window.open('/category-page/sub-category-page/product-pagina/product-pagina-1.html', '_self')
});

catBtnThree.addEventListener('click', function () {
    window.open('/category-page/sub-category-page/product-pagina/product-pagina-3.html', '_self')
});