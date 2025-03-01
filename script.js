// JavaScript to handle navigation and dynamic content loading
const navLinks = document.querySelectorAll('.nav-link');

// Hide and show sections dynamically based on navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the clicked section
        const sectionId = e.target.getAttribute('data-section');
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.style.display = 'block';
    });
});

// Read More functionality for the blog posts
const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 

        const post = e.target.closest('.post');
        const fullContent = post.querySelector('.full-content');
        
        // Show the full content, no need to hide anything else
        fullContent.style.display = 'block'; // Show the full content

        // Hide the "Read More" button after it's clicked
        e.target.style.display = 'none'; // Hide the "Read More" button
    });
});

