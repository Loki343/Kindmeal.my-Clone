import {navbar,menubar} from "../kirti_components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()
document.getElementById("menubar").innerHTML = menubar()


import sidebar from "../kirti_components/sidebar.js";

document.getElementById("sidebar-section").innerHTML = sidebar()


let form = document.querySelector("#contact_form");

let contactArr = JSON.parse(localStorage.getItem("Contact_Data")) || [];

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let obj = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        topic: form.topic.value,
        message: form.message.value,
    };
   
    if (obj.name == "" || obj.email == "") {
        alert("Please Enter required input to proceed further");
        return;
    } else {
        contactArr.push(obj);
        localStorage.setItem("Contact_Data", JSON.stringify(contactArr));
        alert(`Thank You ${obj.name}\n\nWe Received Your Details Successfully!!`)
    }
});