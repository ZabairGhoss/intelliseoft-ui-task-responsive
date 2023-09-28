$(document).ready(function() {


  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'grid',
        grid: {
            rows: 2,    // Number of rows
            cols: 3,    // Number of columns
            gap: '', // Spacing between cards
            
        },
        pagination: false, // Remove pagination (optional)
        arrows: true,     // Show navigation arrows (optional)
    }).mount();
});

});