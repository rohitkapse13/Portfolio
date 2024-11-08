// main.js

// JavaScript for contact form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! I'll get back to you soon.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}

// Drag-and-drop functionality for Skills
const skillsContainer = document.getElementById('skillsContainer');

skillsContainer.addEventListener('dragstart', dragStart);
skillsContainer.addEventListener('dragover', dragOver);
skillsContainer.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.innerHTML);
}

function dragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
}

function drop(e) {
    e.preventDefault();
    const skill = e.dataTransfer.getData('text/plain');
    const newSkill = document.createElement('div');
    newSkill.className = 'skill';
    newSkill.draggable = true;
    newSkill.innerHTML = skill;
    skillsContainer.appendChild(newSkill);
    newSkill.addEventListener('dragstart', dragStart);
}
