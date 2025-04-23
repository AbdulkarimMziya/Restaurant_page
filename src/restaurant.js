// restaurant.js
function createRestaurantHomePage() {
    document.querySelector("#content").innerHTML = "";
    
    const $content_container = document.querySelector("#content")
    
    const div = document.createElement("div");
    div.classList.add("banner");
    
    const p1 = document.createElement("p");
    p1.textContent = "Restaurant Title"
    p1.classList.add("title");
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Best... in..., Guarnteed!"
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "123 4th Street, Cityville, Maine";
    p3.classList.add("address");
    div.appendChild(p3);



    $content_container.appendChild(div);
}

export default createRestaurantHomePage;