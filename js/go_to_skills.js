function scrollingTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var skillsbutton = document.querySelector('.go-to-skills');
var skills = document.querySelector('#skills');

skillsbutton.addEventListener('click', () => {
    scrollingTo(skills);
})