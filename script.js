
const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();


        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });


        const sectionId = e.target.getAttribute('data-section');
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.style.display = 'block';
    });
});


const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 

        const post = e.target.closest('.post');
        const fullContent = post.querySelector('.full-content');
        
   
        fullContent.style.display = 'block'; 

      
        e.target.style.display = 'none'; 
    });
});

