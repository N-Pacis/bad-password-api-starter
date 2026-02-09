// main.js - client-side code to connect to the bad password API

// REFERENCES
let password = document.getElementById("password");
let button = document.querySelector("#submit");

// EVENTS
window.addEventListener("load", updatePassword);
document.addEventListener("submit", (e) => {
    e.preventDefault();
    updatePassword();
});

// add a change event listener to each option
document.querySelectorAll("input[type=radio]").forEach((ele) => {
    ele.addEventListener("change", updatePassword);
});

// called from load and user events
async function updatePassword() {
    // 👉 add code inside this function (from Chapter 9) ...
    let params = [];
    document.querySelectorAll("input[type=radio]:checked").forEach((ele) => {
        params.push(ele.value);
    });
    let response = await fetch(`/api/custom?params=${params}`);
    let data = await response.json();
    password.value = data.message;


    // 👈
}
