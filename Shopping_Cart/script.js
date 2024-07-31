// Sample item data
const itemPrice = 10.00;

// Function to update item quantity
function updateQuantity(button, change) {
    const quantityElement = button.parentNode.querySelector('.item-quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;
    if (currentQuantity < 1) {
        currentQuantity = 1; // Ensure quantity is never less than 1
    }
    quantityElement.textContent = currentQuantity;
    updateTotalPrice();
}

// Function to toggle item like
function toggleLike(button) {
    button.classList.toggle('liked');
}

// Function to delete item
function deleteItem(button) {
    const itemElement = button.closest('.cart-item');
    itemElement.remove();
    updateTotalPrice();
}

// Function to update the total price
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.item-quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Initial total price update
updateTotalPrice();
