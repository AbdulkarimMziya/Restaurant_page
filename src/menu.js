// menu.js

function createMenuPage() {
    document.querySelector("#content").innerHTML = "";

    const $content_container = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList.add("section");

    const p1 = document.createElement("p");
    p1.textContent = "Menu";
    p1.classList.add("section-title");
    div.appendChild(p1);

    const div1 = document.createElement("div");
    div1.classList.add("menu-container");

    for (let i = 1; i <= 8; i++) {
        const item = document.createElement("div");
        item.classList.add("menu-item");
        item.innerHTML = `
            <h3>Dish ${i}</h3>
            <p>Description of dish ${i}</p>
        `;
        div1.appendChild(item);
    }

    $content_container.appendChild(div);
    $content_container.appendChild(div1);
}

export default createMenuPage;