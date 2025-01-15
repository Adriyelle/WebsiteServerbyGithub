// JavaScript for Navigation
function navigate(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content');
    sections.forEach((section) => (section.style.display = 'none'));

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
