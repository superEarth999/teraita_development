

document.getElementById('navToggle').addEventListener('click', function() {
    var nav = document.getElementById('navMenu');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
