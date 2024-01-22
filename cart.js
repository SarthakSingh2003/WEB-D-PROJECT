function deleteItem(button) {
    // Get the parent div of the button (cart-item) and remove it
    var itemDiv = button.parentNode;
    itemDiv.parentNode.removeChild(itemDiv);
}
