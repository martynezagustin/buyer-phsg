const btnSubmit = document.querySelector(".btn-submit")
const inputName = document.querySelector("#firstname")
const inputLastName = document.querySelector("#lastname")
const inputAge = document.querySelector("#age")
const inputTastes = document.querySelector("#tastes")
const inputRRSS = document.querySelector("#rrss")
const inputUbication = document.querySelector("#ubication")
const inputActivities = document.querySelector("#activities")

let datesBuyer = JSON.parse(localStorage.getItem("buyer")) || {}
let datesBuyerLength = (Object.keys(datesBuyer).length)

function loadBuyer(){
    if(datesBuyerLength > 6){
        const pf = document.getElementById("grid-dates__name-p")
        pf.innerHTML = `${datesBuyer.name} ${datesBuyer.lastname}`

        const pfAge = document.getElementById("grid-dates__age-p")
        pfAge.innerText = parseInt(datesBuyer.age)

        const uli = document.getElementById("grid-dates__tastes-ul")
        const listita = document.createElement("li")
        listita.innerText = datesBuyer.tastes
        uli.appendChild(listita)

        const pfRRSS = document.getElementById("grid-dates__rrss-p")
        pfRRSS.innerHTML = `${datesBuyer.rrss}`

        const pfUbication = document.getElementById("grid-dates__ubication-p")
        pfUbication.innerText = datesBuyer.ubication

        const pfActivities = document.getElementById("grid-dates__activities-p")
        pfActivities.innerText = datesBuyer.activities
    }
}


window.onload = loadBuyer

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputName.value == "" || inputLastName.value == "" || inputAge.value == "" || inputTastes.value == "" || inputRRSS.value == "" || inputUbication.value == "") {
        alert("Por favor, Ivo, chequeá los campos vacíos!")
    } else {
        const pf = document.getElementById("grid-dates__name-p")
        pf.innerHTML = `${inputName.value} ${inputLastName.value}`

        const pfAge = document.getElementById("grid-dates__age-p")
        pfAge.innerText = parseInt(inputAge.value)

        const uli = document.getElementById("grid-dates__tastes-ul")
        uli.innerHTML = `<li>${inputTastes.value}</li>`

        const pfRRSS = document.getElementById("grid-dates__rrss-p")
        pfRRSS.innerText = inputRRSS.value

        const pfUbication = document.getElementById("grid-dates__ubication-p")
        pfUbication.innerText = inputUbication.value

        const pfActivities = document.getElementById("grid-dates__activities-p")
        pfActivities.innerText = inputActivities.value

        datesBuyer = ({
            name: inputName.value,
            lastname: inputLastName.value,
            age: inputAge.value,
            tastes: inputTastes.value,
            rrss: inputRRSS.value,
            ubication: inputUbication.value,
            activities: inputActivities.value
        })
        console.log(Object.keys(datesBuyer).length);
        localStorage.setItem("buyer", JSON.stringify(datesBuyer))
    }
})