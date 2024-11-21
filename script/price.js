document.querySelectorAll('.form-control').forEach(select => {
    select.addEventListener('change', function() {
        const item = this.closest('.list-group-item');
        const basePrice = parseInt(document.getElementById('#sum-price').textContent).replace('P', '');
        const quantity = parseInt(this.value);
        console.log(basePrice, quantity);
        
        if (!isNaN(basePrice) && !isNaN(quantity)) {
            const total = basePrice * quantity;
            return updateTotal(total);
        } else {
            item.querySelector('#sum-price').textContent = 'P0';
        }

    });
});

function updateTotal(total) {
    document.querySelectorAll('.list-group-item').forEach(item => {
        const sumPriceText = item.querySelector('#sum-price')?.textContent;
        if (sumPriceText) {
            total += parseFloat(sumPriceText.replace('P', ''));
        }
    });
    document.querySelector('.list-group-item:last-child strong').textContent = 'P' + total.toFixed(2);
}