const container = document.querySelector('.cards-container');

fetch('http://localhost:3000/adidas-shoes')
.then(myData => myData.json())
.then(jsonData => showCards(jsonData));

function showCards(clothes) {
    console.log(clothes);

    let htmlCode = '';
    for (let i = 0; i < clothes.length; i++) {
        const cloth = clothes[i];
        htmlCode += createCard(cloth);
    }
    container.innerHTML = htmlCode;
}

function createCard(cloth){
    const card = `
        <div class="second-card">
            <h2>${cloth.name}</h2>
            <img src="${cloth.image}" />
            <p>${cloth.sizes}</p>
        </div>
    `;
    return card;
}

// JavaScript to adjust the number of columns dynamically based on screen width
function updateCardLayout() {
    const screenWidth = window.innerWidth;
    const cardsContainer = document.querySelector('.cards-container');
    if (screenWidth >= 769) {
        cardsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (screenWidth >= 481 && screenWidth <= 768) {
        cardsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        cardsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
}

// Call the function on page load and whenever the window is resized
window.addEventListener('load', updateCardLayout);
window.addEventListener('resize', updateCardLayout);
