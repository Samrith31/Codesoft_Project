function showSection(sectionId) {
    const sections = document.querySelectorAll('#main-content > div');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });

    // Update the active link
    const links = document.querySelectorAll('.nav .link a');
    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('onclick').includes(sectionId));
    });
}

function downloadCV() {
    // Replace 'resume.pdf' with the actual path to your resume file
    window.location.href = 'path/to/your/resume.pdf';
}

function hireMe() {
    // Redirect to a contact or hire me page
    window.location.href = 'path/to/hire/me/page.html';
}

// Set 'About' section as default visible section
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
