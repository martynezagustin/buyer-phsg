const btnSubmit = document.querySelector(".btn-submit")
const inputName = document.querySelector("#firstname")
const inputLastName = document.querySelector("#lastname")
const inputAge = document.querySelector("#age")
const inputTastes = document.querySelector("#tastes")
const inputRRSS = document.querySelector("#rrss")
const inputUbication = document.querySelector("#ubication")
const inputActivities = document.querySelector("#activities")

const nameDate = document.querySelector("#grid-dates__name-p")
const ageDate = document.querySelector("#grid-dates__age-p")
const tastesDate = document.querySelector("#grid-dates__tastes-ul")
const RRSSDate = document.querySelector("#grid-dates__rrss-p")
const ubicationDate = document.querySelector("#grid-dates__ubication-p")
const activitiesDate = document.querySelector("#grid-dates__activities-p")

let datesBuyer = JSON.parse(localStorage.getItem("buyer")) || {}
let datesBuyerLength = (Object.keys(datesBuyer).length)

function loadBuyer(){
    if(datesBuyerLength > 6){
        inputName.value = datesBuyer.name || ""
        inputLastName.value = datesBuyer.lastname || ""
        inputAge.value = datesBuyer.age || ""
        inputTastes.value = datesBuyer.tastes || ""
        inputRRSS.value = datesBuyer.rrss || ""
        inputUbication.value = datesBuyer.ubication || ""
        inputActivities.value = datesBuyer.activities || ""
        setDates()
    }
}


window.onload = loadBuyer

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputName.value == "" || inputLastName.value == "" || inputAge.value == "" || inputTastes.value == "" || inputRRSS.value == "" || inputUbication.value == "") {
        alert("Por favor, Ivo, chequeá los campos vacíos!")
    } else {
        datesBuyer = ({
            name: inputName.value,
            lastname: inputLastName.value,
            age: inputAge.value,
            tastes: inputTastes.value,
            rrss: inputRRSS.value,
            ubication: inputUbication.value,
            activities: inputActivities.value
        })
        localStorage.setItem("buyer", JSON.stringify(datesBuyer))
        setDates()
        loadBuyer()
    }
})

function setDates(){
    nameDate.innerHTML = `${inputName.value} ${inputLastName.value}`
    ageDate.innerHTML = `${inputAge.value}`
    tastesDate.innerHTML = `<li>${inputTastes.value}</li>`
    RRSSDate.innerHTML = `${inputRRSS.value}`
    ubicationDate.innerHTML = `${inputUbication.value}`
    activitiesDate.innerHTML = `${inputActivities.value}`
}


loadBuyer()