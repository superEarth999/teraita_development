// JavaScript for home section
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    // Replace this with the action you want to perform when the button is clicked
    alert('You clicked the Learn More button!');
});

// JavaScript for contact form submission (example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add code to handle form submission, such as sending data to a server or displaying a success message
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


