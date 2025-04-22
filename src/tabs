// tabs.js
import createRestaurantHomePage from './restaurant';
import createContactPage from './contact';
import createMenuPage from './menu';

function createTabs() {
    const $homeButton = document.querySelector("#btn-home-page");
    const $menuButton = document.querySelector("#btn-menu-page");
    const $contactButton = document.querySelector("#btn-conact-page");

    $homeButton.addEventListener('click', () => {
        createRestaurantHomePage();
        console.log("Home Page!!");
    });

    $menuButton.addEventListener('click', () => {
        createMenuPage();
        console.log("Menu Page!!");
    });

    $contactButton.addEventListener('click', () => {
        createContactPage();
        console.log("Contact Page!!");
    });
}

export default createTabs;