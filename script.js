// JavaScript for home section



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

// document.getElementById("learnMoreBtn").onclick = function() {
    
//     window.location.href = "https://teraita.vercel.app/index.html";
// };
function openNewTab() {
    
    window.open("TeraitaInfo.html", "_blank");
}


