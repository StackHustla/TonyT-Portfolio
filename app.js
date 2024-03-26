document.querySelector('.arrow-left').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: -100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    document.querySelector('.slider').scrollBy({
        left: 100, // Adjust the scroll distance as needed
        behavior: 'smooth'
    });
});
