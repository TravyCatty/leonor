function scrollingTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var homebutton = document.querySelector('.go-to-home');
var header = document.querySelector('#header');

homebutton.addEventListener('click', () => {
    scrollingTo(header);
})