// contact.js

function createContactPage() {
    document.querySelector("#content").innerHTML = "";
    
    const $content_container = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList.add("section");

    const p1 = document.createElement("p");
    p1.textContent = "Contact";
    p1.classList.add("section-title");
    div.appendChild(p1);

    const div1 = document.createElement("div");
    div1.classList.add("section");
    div1.classList.add("contact-section");

    const p2 = document.createElement("p");
    p2.innerHTML = `<span>Tel:</span> +123 456 7890`;

    const p3 = document.createElement("p");
    p3.innerHTML = `<span>Email:</span> totallyRealEmail@notFake.com`;

    const p4 = document.createElement("p");
    p4.innerHTML = `<span>Address:</span> 123 4th Street, Cityville, Maine`;

    div1.appendChild(p2);
    div1.appendChild(p3);
    div1.appendChild(p4);


    $content_container.appendChild(div);
    $content_container.appendChild(div1);
}

export default createContactPage;