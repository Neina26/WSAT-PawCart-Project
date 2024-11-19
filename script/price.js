document.querySelectorAll('.form-control').forEach(select => {
    select.addEventListener('change', function() {
        const item = this.closest('.list-group-item');
        const basePrice = parseFloat(this.options[this.selectedIndex].getAttribute('data-price'));
        const quantity = parseInt(this.value);
        
        if (!isNaN(basePrice) && !isNaN(quantity)) {
            const total = basePrice * quantity;
            item.querySelector('#sum-price').textContent = 'P' + total.toFixed(2);
        } else {
            item.querySelector('#sum-price').textContent = 'P0';
        }
        updateTotal();
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.list-group-item').forEach(item => {
        const sumPriceText = item.querySelector('#sum-price')?.textContent;
        if (sumPriceText) {
            total += parseFloat(sumPriceText.replace('P', ''));
        }
    });
    document.querySelector('.list-group-item:last-child strong').textContent = 'P' + total.toFixed(2);
}