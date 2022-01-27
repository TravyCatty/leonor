function scrollingTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var portfoliobutton = document.querySelector('.go-to-portfolio');
        var portfolio = document.querySelector('#portfolio');

        portfoliobutton.addEventListener('click', () => {
            scrollingTo(portfolio);
        })