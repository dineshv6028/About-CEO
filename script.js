document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate__animated');
    elements.forEach(function(element) {
        element.classList.add('animate__fadeIn');
    });
});

function showMore() {
    var moreContent = document.getElementById('more-content');
    moreContent.classList.remove('d-none');
    moreContent.scrollIntoView({ behavior: 'smooth' });
}
