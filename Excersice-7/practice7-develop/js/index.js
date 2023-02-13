let button = document.getElementById('buttonCount');
let counter = 0;

button.addEventListener('click', () => {
	addClick();
});

let addClick = () => {
	counter++;
	let clickNumber = counter > 9 ? counter : "0" + counter; 
	let counterElement = document.getElementById('text');
	counterElement.innerText = clickNumber; 
}