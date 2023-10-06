const currentUser = localStorage.getItem("currentUser")
const registerBtn = document.querySelector('#registerBtn')
const loginBtn = document.querySelector('#loginBtn')
const compBtn = document.querySelector('#compBtn')
const logoutBtn = document.querySelector('#logoutBtn')
const h1 = document.querySelector("h1")

if(currentUser === '' || currentUser === null){
    logoutBtn.style = 'display: none'
} else {
    logoutBtn.style = 'display: inline'
    loginBtn.style = 'display: none'
    registerBtn.style = 'display: none'
    h1.innerHTML += currentUser
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser')
    logoutBtn.style = 'display: none'
    loginBtn.style = 'display: inline'
    registerBtn.style = 'display: inline'
    h1.innerHTML = 'User: '
})



