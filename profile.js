const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')


const colorAlert = ()=> {
	alert("There you have it! Blue is my favorite color")
}

const placeAlert = ()=> {
	alert("wherever Ayano is")
}

const ritualAlert = ()=> {
	alert("A good dinner and wine")
}

colorBtn.addEventListener('click', colorAlert)
ritualBtn.addEventListener('click', ritualAlert)
placeBtn.addEventListener('click', placeAlert)