const tbody = document.querySelector("tbody");
const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || [];
const addBtn = document.querySelector("#addBtn");
const table = document.querySelector("table");
const modalBtn = document.querySelector("#modalBtn");
const allInputs = document.querySelectorAll('input')

const user = users.find(user => user.name === currentUser);
let myComputers = user ? user.computers : [];
let change = false;
let selectedId = null;

function updateTable() {
    tbody.innerHTML = "";
    for (let computer of myComputers) {
        tbody.innerHTML += `
<tr>
<td>${computer.id}</td>
<td>${computer.mark}</td>
<td><img src="${computer.img}" alt=""></td>
<td>
<button id="${computer.id}d" class="btn btn-danger">Delete</button>
<button id="${computer.id}c" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">Change</button>
</td>
</tr>`;
    }
}

function saveComputer() {
    if (!change) {
        const newComputer = {
            id: myComputers.length === 0 ? 1 : myComputers[myComputers.length - 1].id + 1,
            mark: document.getElementById('markInput').value,
            ram: document.getElementById('ramInput').value,
            gpu: document.getElementById('gpuInput').value,
            img: document.getElementById('imgInput').value,
            cpu: document.getElementById('cpuInput').value,
            rom: document.getElementById('romInput').value,
            os: document.getElementById('osInput').value
        };
        myComputers.push(newComputer);

        for (let user of users) {
            if (user.name === currentUser) {
                console.log(user.name);
                user.computers = myComputers;
            }
        }
        for(let input of allInputs){
            input.value = ''
        }

        console.log(users);

        localStorage.setItem("users", JSON.stringify(users));
        updateTable();
    }
}

function deleteComputer(id) {
    myComputers = myComputers.filter(comp => comp.id !== id);
    for (let user of users) {
        if (user.name === currentUser) {
            user.computers = myComputers;
        }
    }
    localStorage.setItem("users", JSON.stringify(users));
    updateTable();
}

table.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Delete") {
        deleteComputer(parseInt(e.target.id));
    } else if (e.target.innerHTML === "Change") {
        selectedId = parseInt(e.target.id);
    }
});
addBtn.addEventListener("click", saveComputer);

updateTable();