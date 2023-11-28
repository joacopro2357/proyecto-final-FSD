function calculateTotal() {
    var quantity = document.getElementById("quantity").value;
    var productPrice = 10; // Precio del producto (ejemplo: $10 por unidad)
    var totalPrice = quantity * productPrice;

    document.getElementById("totalPrice").value = "$" + totalPrice.toFixed(2);
}

document.getElementById("purchaseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var productName = document.getElementById("productName").value;
    var quantity = document.getElementById("quantity").value;
    var totalPrice = document.getElementById("totalPrice").value;

    alert("Compra realizada:\nProducto: " + productName + "\nCantidad: " + quantity + "\nPrecio Total: " + totalPrice);
});