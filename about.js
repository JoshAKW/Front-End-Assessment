console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been successfully submitted, congratulations you rock! \n  “It’s easy to forget what a sin is in the middle of a battlefield.”')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const duckSnake = document.querySelector('#duckSnake');

duckSnake.addEventListener('mouseover',() => {
	alert('You have great eyes! \n\n"Find someone to believe in, and find it for yourself.\n When you do, pass it on to the future."')
})