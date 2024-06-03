// Function to fetch JSON data
function fetchData() {
    return fetch('http://localhost:3000/nike-clothes')
        .then(response => response.json());
}

// Function to create card elements dynamically for each clothing
function createCard(cloth) {
    // Generating HTML content for the card dynamically
    const cardHTML = `
        <div class="container">
            <div class="card">
                <div class="imgBx">
                    <img src="${cloth.image}" alt="shoe-image">
                </div>
                <div class="contentBx">
                    <h2>${cloth.name}</h2>
                    <div class="size">
                        <h3>Size :</h3>
                        ${cloth.sizes.map(size => `<span>${size}</span>`).join('')}
                    </div>
                    <div class="color">
                        <h3>Color :</h3>
                        ${cloth.colors.map(color => `<span style="background-color: ${color};"></span>`).join('')}
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    `;

    // Creating a container element and setting its innerHTML to the generated HTML content
    const container = document.createElement('div');
    container.innerHTML = cardHTML.trim();

    // Returning the constructed container
    return container.firstChild;
}

// Function to display cards on the webpage
function displayCards() {
    fetchData()
        .then(data => {
            const cardsContainer = document.querySelector('.cards-container'); // Selecting the container to display cards

            // Looping through the cloth data to create and display cards for each clothing
            data.forEach(cloth => {
                const card = createCard(cloth); // Creating a card for the current clothing
                cardsContainer.appendChild(card); // Appending the created card to the container
            });
        });
}

// Calling the function to display cards when the page loads
displayCards();

// adjusting the number of columns based on screen width
function updateCardLayout() {
    const screenWidth = window.innerWidth; // Getting the current screen width
    const cardsContainer = document.querySelector('.cards-container'); // Selecting the container for cards

    // Adjusting the grid template columns based on screen width
    if (screenWidth >= 769) {
        cardsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Setting 3 columns for desktop screens
    } else if (screenWidth >= 481 && screenWidth <= 768) {
        cardsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Setting 2 columns for tablet screens
    } else {
        cardsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // Setting 1 column for mobile screens
    }
}

// Calling the function to update card layout on page load and window resize
window.addEventListener('load', updateCardLayout);
window.addEventListener('resize', updateCardLayout);
