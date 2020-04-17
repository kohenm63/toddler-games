
const animal_items = document.querySelectorAll('.animal-item');
const animals = document.querySelectorAll('.animal');

let draggedItem = null;

for (let i = 0; i < animal_items.length; i++) {
	const animal = animal_items[i];

	animal.addEventListener('dragstart', function () {
		draggedItem = animal;
		setTimeout(function () {
			animal.style.display = 'none';
		}, 0)
	});

	animal.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < animals.length; j ++) {
		const animal = animals[j];

		animal.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		animal.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		animal.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		animal.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}
