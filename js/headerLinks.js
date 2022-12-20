const anchors = document.querySelectorAll('a[href*="#"]');
const home = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');
const portfolio = document.getElementById('portfolio');
const team = document.getElementById('team');
const contact = document.getElementById('contact');

document.addEventListener('scroll', () => {
    if (home.getBoundingClientRect().y >= 0) {
        resetLinks();
        document.querySelectorAll('.link__home')[0].classList.add('active');
        document.querySelectorAll('.link__home')[1].classList.add('active');
    }
    if (about.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__about')[0].classList.add('active');
        document.querySelectorAll('.link__about')[1].classList.add('active');
    }
    if (services.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__services')[0].classList.add('active');
        document.querySelectorAll('.link__services')[1].classList.add('active');
    }
    if (portfolio.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__portfolio')[0].classList.add('active');
        document.querySelectorAll('.link__portfolio')[1].classList.add('active');
    }
    if (team.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__team')[0].classList.add('active');
        document.querySelectorAll('.link__team')[1].classList.add('active');
    }
    if (contact.getBoundingClientRect().y <= 200) {
        resetLinks();
        document.querySelectorAll('.link__contact')[0].classList.add('active');
        document.querySelectorAll('.link__contact')[1].classList.add('active');
    }
})

function resetLinks() {
    document.querySelectorAll('.link__home')[0].classList.remove('active');
    document.querySelectorAll('.link__home')[1].classList.remove('active');
    document.querySelectorAll('.link__contact')[0].classList.remove('active');
    document.querySelectorAll('.link__contact')[1].classList.remove('active');
    document.querySelectorAll('.link__about')[0].classList.remove('active');
    document.querySelectorAll('.link__about')[1].classList.remove('active');
    document.querySelectorAll('.link__services')[0].classList.remove('active');
    document.querySelectorAll('.link__services')[1].classList.remove('active');
    document.querySelectorAll('.link__team')[0].classList.remove('active');
    document.querySelectorAll('.link__team')[1].classList.remove('active');
    document.querySelectorAll('.link__portfolio')[0].classList.remove('active');
    document.querySelectorAll('.link__portfolio')[1].classList.remove('active');
}

for (let anchor of anchors) {
    anchor.addEventListener('click', (link) => {
        link.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    })
}
