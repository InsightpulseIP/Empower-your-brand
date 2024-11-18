
function toggleText(textId) {
    
    const textContainer = document.getElementById('text' + textId);
    const button = textContainer.nextElementSibling;
    
    if (textContainer.classList.contains('expanded')) {
        textContainer.classList.remove('expanded');
        button.textContent = 'Show More';
    } else {
        textContainer.classList.add('expanded');
        button.textContent = 'Show Less'; 
    }
}
