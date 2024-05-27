const temperature = document.querySelector(".temperature") 
const template = document.querySelector("#petTemplate")
const wrapper = document.createDocumentFragment()
async function getWeather() {
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/OKX/27,35/forecast")
    const weatherData = await weatherPromise.json()
    const temperatureData = weatherData.properties.periods[0].temperature
    temperature.textContent = temperatureData
}


getWeather()

async function getPetData() {
    const petDataPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
    const petData = await petDataPromise.json()
   
    petData.forEach(pet =>{
        const duplicate = template.content.cloneNode(true)
        duplicate.querySelector("h3").textContent = pet.name
        duplicate.querySelector(".description").textContent = pet.description
        duplicate.querySelector(".age").textContent = updateAge(pet.birthYear)
        if(!pet.photo) pet.photo = "images/fallback.jpg"
        duplicate.querySelector(".pet__image img").src = pet.photo
        duplicate.querySelector(".pet__image img").alt = `${pet.species} name ${pet.name}`
        wrapper.appendChild(duplicate)
    })
    document.querySelector(".petList__grid").appendChild(wrapper)
    
}
getPetData()

function updateAge(birthYear){
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear
    if(age ==1) return "1 year Old"
    if(age ==0) return "less than a year old"
    return `${age} years old`
    

    
}