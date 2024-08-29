// import pizzaImg from "./pizzaImg.jpg";

export function buildHomePage()
{
    const content = document.querySelector("#content");

    //create header element
    const header = document.createElement("h1");
    header.classList.add("pageHeader");
    header.textContent = "Alex's Pizza Place";
    content.appendChild(header);

    //create body paragraph text
    const paraInfo = document.createElement("p");
    paraInfo.classList.add("pageInfo");
    paraInfo.textContent = "Welcome to Alex’s Pizza Restaurant, where passion for pizza meets the art of culinary excellence. Founded in [Year], Alex’s Pizza is a family-owned gem committed to delivering mouthwatering pizzas crafted from the finest ingredients. Our dough is made fresh daily, and our sauces are prepared with a blend of secret herbs and spices that give each slice a unique and unforgettable flavor.";
    content.appendChild(paraInfo);

    //import image
    // const image = document.createElement("img");
    // image.classList.add("pizzImg");
    // image.src = pizzaImg;
    // document.body.appendChild(image);
}