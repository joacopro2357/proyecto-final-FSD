// elements.js

document.addEventListener('DOMContentLoaded', function () {
    // Verificar si hay elementos almacenados en localStorage
    const storedElements = JSON.parse(localStorage.getItem('elements')) || [];

    // Mostrar los elementos almacenados en la tabla
    displayElements(storedElements);

    // Obtener el formulario de carga de elementos
    const elementForm = document.getElementById('elementForm');

    // Agregar un event listener al formulario
    elementForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const elementName = document.getElementById('elementName').value;
        const elementDescription = document.getElementById('elementDescription').value;
        // Agregar otros campos según sea necesario

        // Crear un nuevo elemento
        const newElement = {
            name: elementName,
            description: elementDescription
            // Agregar otros campos según sea necesario
        };

        // Agregar el nuevo elemento a la lista de elementos
        storedElements.unshift(newElement);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('elements', JSON.stringify(storedElements));

        // Mostrar los elementos actualizados en la tabla
        displayElements(storedElements);

        // Limpiar el formulario
        elementForm.reset();
    });

    // Función para mostrar los elementos en la tabla
    function displayElements(elements) {
        const elementList = document.getElementById('elementList');
        elementList.innerHTML = ''; // Limpiar la lista antes de volver a mostrar

        elements.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = `${element.name} - ${element.description}`;
            // Agregar otras propiedades al listItem según sea necesario
            elementList.appendChild(listItem);
        });
    }
});
