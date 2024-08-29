import "./style.css";
import { buildHomePage } from './homePage';
import { buildAbout } from "./about";
import { buildMenu } from './menu';

//select the content div. Child nodes change based on the nav button you press
const parentContent = document.querySelector("#content");
const buttons = document.getElementsByTagName("button");
console.log(buttons);

//build initial homepage
buildHomePage();


for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", (e) =>
    {
        if(e.target.id == "home")
        {
            parentContent.innerHTML = "";
            buildHomePage();
        }
        else if(e.target.id == "menu")
        {
            parentContent.innerHTML = "";
            buildMenu();
        }
        else if(e.target.id == "about")
        {
            parentContent.innerHTML = "";
            buildAbout();
        }
    });
}


