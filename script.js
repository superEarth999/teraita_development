// JavaScript for home section
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    
    alert('You clicked the Learn More button!');
});

// JavaScript for contact form submission (example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Thank you for sending message and your Form submitted successfully!..we will get back to you.');
});


// routing pages

function showPage(pageId) {
    // Hide all page sections
    var pageSections = document.getElementsByClassName('page-section');
    for (var i = 0; i < pageSections.length; i++) {
        pageSections[i].style.display = 'none';
    }

    // Show the selected page section
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
}

//  header fixed  to header when scrolling
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 100) { // Adjust the scroll position threshold as needed
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// document.getElementById('navToggle').addEventListener('click', function() {
//     var nav = document.getElementById('navMenu');
//     if (nav.style.display === 'block') {
//         nav.style.display = 'none';
//     } else {
//         nav.style.display = 'block';
//     }
// });

// document.getElementById('navToggle').addEventListener('click', function() {
//     var nav = document.getElementById('navMenu');
//     if (nav.style.display === 'block') {
//         nav.style.display = 'none';
//         this.textContent = 'Menu'; // Change text to 'Menu' when closing
//     } else {
//         nav.style.display = 'block';
//         this.textContent = 'X'; // Change text to 'X' when opening
//     }
// });

document.getElementById('navToggle').addEventListener('click', function() {
    var nav = document.getElementById('navMenu');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        this.innerHTML = '☰'; // Change to menu icon
    } else {
        nav.style.display = 'block';
        this.innerHTML = 'X'; // Change to 'X' icon
    }
});






