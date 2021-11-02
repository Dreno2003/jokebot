
const displayJoke = document.querySelector('#mainJoke');

const jokeGeneratorBtn = document.querySelector('#generate');

async function generateJoke () {
	// body... 
	const data = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const result = await data.json();

	displayJoke.innerHTML = result.joke;
	// console.log(result.joke)

};

jokeGeneratorBtn.addEventListener('click', generateJoke);
window.addEventListener('load', generateJoke);