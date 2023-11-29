document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const casacasTable = document.getElementById('casacasTable').getElementsByTagName('tbody')[0];

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    function uploadCasaca() {
        const casacaName = document.getElementById('casacaName').value;
        const casacaPrice = document.getElementById('casacaPrice').value;
        const casacaImage = document.getElementById('casacaImage').files[0];

        // Crear una nueva fila en la tabla con la información de la casaca cargada
        const newRow = casacasTable.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);
        const imageCell = newRow.insertCell(2);

        nameCell.innerHTML = casacaName;
        priceCell.innerHTML = `$${casacaPrice}`;
        imageCell.innerHTML = `<img src="${URL.createObjectURL(casacaImage)}" alt="${casacaName}" />`;

        // Limpiar el formulario después de cargar la casaca
        uploadForm.reset();
    }
});

// En formcarga.js
document.addEventListener('DOMContentLoaded', function () {
    const formCarga = document.getElementById('formCarga');

    formCarga.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        // Asegúrate de tener un input de tipo file en tu formulario con el id 'imagen'
        const imagen = document.getElementById('imagen').files[0];

        // Guardar la casaca en localStorage
        guardarCasaca({ nombre, precio, imagen });

        // Limpiar el formulario
        formCarga.reset();
    });

    function guardarCasaca(casaca) {
        // Recuperar las casacas ya existentes en localStorage
        const casacasGuardadas = JSON.parse(localStorage.getItem('casacas')) || [];

        // Agregar la nueva casaca a la lista
        casacasGuardadas.push(casaca);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('casacas', JSON.stringify(casacasGuardadas));
    }
});
