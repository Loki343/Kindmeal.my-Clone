import {navbar,menubar} from "../kirti_components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()
document.getElementById("menubar").innerHTML = menubar()


import sidebar from "../kirti_components/sidebar.js";

document.getElementById("sidebar-section").innerHTML = sidebar()



const showbtn = () =>{

    let buttonDiv = document.getElementById("pagination-button")
    let results = 60;
    let perPage = 10;

    let buttonResult = Math.ceil(results/perPage)

    for(let i = 1;i<=buttonResult;i++){

        let button = document.createElement("button")
        button.innerText = i;

        buttonDiv.append(button)
    }

}
showbtn()