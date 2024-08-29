// import pizzaImg from "./pizzaImg.jpg";

export function buildMenu()
{
    const content = document.querySelector("#content");

    //create header element
    const header = document.createElement("h1");
    header.classList.add("pageHeader");
    header.textContent = "Menu";
    content.appendChild(header);

    //create body paragraph text
    const paraInfo = document.createElement("p");
    paraInfo.classList.add("pageInfo");
    paraInfo.textContent = `Our menu is:
    Pizza, pasta, and a soda. That is all we serve. We apologize.`;
    content.appendChild(paraInfo);

    //import image
    // const image = document.createElement("img");
    // image.classList.add("pizzImg");
    // image.src = pizzaImg;
    // document.body.appendChild(image);
}