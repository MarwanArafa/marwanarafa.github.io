// Update project card hover color
const projectCard = document.querySelector('.project-card');
projectCard.style.transition = 'background-color 0.3s';
projectCard.onmouseover = function() {
    this.style.backgroundColor = 'yellow'; // Change to yellow or bright blue
};
projectCard.onmouseout = function() {
    this.style.backgroundColor = ''; // Reset to original
};

// Make project descriptions bold
const projectDescriptions = document.querySelectorAll('.project-description');
projectDescriptions.forEach(function(description) {
    description.style.fontWeight = 'bold';
});

// Additional code for the Projects component can be added here.