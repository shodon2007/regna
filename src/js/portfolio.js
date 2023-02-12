const app = [
    { itemName: 'App 1', bg: 'img/portfolio/portfolio-1.jpg' },
    { itemName: 'App 2', bg: 'img/portfolio/portfolio-3.jpg' },
    { itemName: 'App 3', bg: 'img/portfolio/portfolio-6.jpg' },
];

const card = [
    { itemName: 'Card 1', bg: 'img/portfolio/portfolio-4.jpg' },
    { itemName: 'Card 2', bg: 'img/portfolio/portfolio-7.jpg' },
    { itemName: 'Card 3', bg: 'img/portfolio/portfolio-8.jpg' },
];

const web = [
    { itemName: 'Web 1', bg: 'img/portfolio/portfolio-2.jpg' },
    { itemName: 'Web 2', bg: 'img/portfolio/portfolio-5.jpg' },
    { itemName: 'Web 3', bg: 'img/portfolio/portfolio-9.jpg' },
];

window.portfolioClick = (type) => {
    if (type == 'card') {
        render(card);
    } else if (type == 'web') {
        render(web);
    } else if (type == 'app') {
        render(app);
    } else if (type == 'all') {
        render([...card, ...app, ...web]);
    }
}

document.querySelector('.portfolio__nav').addEventListener('click', (e) => {
    resetStyles();
    e.target.classList.add('active');
})

const resetStyles = () => {
    document.querySelectorAll('.portfolio__el').forEach((el) => {
        el.classList.remove('active');
    })
}

const render = (who, type) => {
    document.querySelector('.portfolio__works').innerHTML = '';
    who.forEach((el) => {
        el.name = el.itemName.slice(0, el.itemName.indexOf(' '));
        document.querySelector('.portfolio__works').innerHTML += `
            <div class="works__work" style="background: url(${el.bg}) center center / cover no-repeat">
                <div class="work__body">
                    <div class="work__title">${el.itemName}</div>
                    <div class="work__subtitle">${el.name}</div>
                </div>
            </div>
            `;
    })
}
render([...card, ...app, ...web]);