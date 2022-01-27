function scrollingTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var aboutbutton = document.querySelector('.go-to-about');
var about = document.querySelector('#aboutme');

aboutbutton.addEventListener('click', () => {
    scrollingTo(aboutme);
})