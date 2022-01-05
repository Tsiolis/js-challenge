const aside = document.getElementById('aside-form');
const dogContainer = document.getElementById('dog-container')


//Get all breeds and add to search options in aside 
async function getBreeds(){
	const data = await fetch('https://api.thedogapi.com/v1/breeds')
	.then(response => response.json())
	.then((data) =>{
		data.forEach(i => {
			aside.innerHTML +=
			
			`
			<div>
  	<input onclick="searchBreed()" type="radio" id="${i.name}" name="Breed" value="${i.name}">
  	<label for="${i.name}">${i.name}</label>
		</div>
			
			`
	
		})
	})
}

getBreeds();

//Search for individual breed and output image to container
function searchBreed(){
	document.addEventListener('click', (e) =>{
		
		dogContainer.innerHTML = '';
		const breed = e.target.value;
		const data = fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
		.then(response => response.json())
		.then((data) =>{
			data.forEach(i => {
				dogContainer.innerHTML =
				`
				<div class="doge">
				<img src="https://cdn2.thedogapi.com/images/${i.reference_image_id}.jpg">
				<h2>${i.name}</h2>
				</div>
				`
			})
		})
	});

}

