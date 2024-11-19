const notification = document.getElementById('notification');
function addToCart() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000); // Notification lasts 2 seconds
}