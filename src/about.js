// import pizzaImg from "./pizzaImg.jpg";

export function buildAbout()
{
    const content = document.querySelector("#content");

    //create header element
    const header = document.createElement("h1");
    header.classList.add("pageHeader");
    header.textContent = "About";
    content.appendChild(header);

    //create body paragraph text
    const paraInfo = document.createElement("p");
    paraInfo.classList.add("pageInfo");
    paraInfo.textContent = "At Pizza Place, we’re passionate about serving up delicious, handcrafted pizzas made with the freshest ingredients. Our family-owned pizzeria has been a local favorite for years, known for our commitment to quality and authenticity. From our classic Margherita to our inventive specialty pizzas, each pie is baked to perfection in our state-of-the-art ovens. We believe in creating a welcoming atmosphere where friends and family can gather to enjoy great food and create lasting memories. Come join us for a slice and experience the taste of tradition and love in every bite!";
    content.appendChild(paraInfo);

    //import image
    // const image = document.createElement("img");
    // image.classList.add("pizzImg");
    // image.src = pizzaImg;
    // document.body.appendChild(image);
}