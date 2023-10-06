const user = [
    {
        name: "ul1",
        password: "pl1",
        phone: "000-000-0000",
        computers: []
    }
];

const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : user;

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const allInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let userAvaible = users.some(user => user.name === allInputs[0].value && user.password === allInputs[1].value)

    if(userAvaible){
        localStorage.setItem("currentUser", allInputs[0].value);
        location.href = "../Slider/main.html";
    } else {
        alert('User doesn`t exist')
    }
});