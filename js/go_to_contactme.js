function scrollingTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var contactbutton = document.querySelector('.go-to-contactme');
        var contact = document.querySelector('#contactme');

        contactbutton.addEventListener('click', () => {
            scrollingTo(contactme);
        })