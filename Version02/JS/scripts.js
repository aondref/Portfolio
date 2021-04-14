
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const blog = document.querySelector('#blog');
const contact = document.querySelector('#contact');

const homeButton = document.getElementById('home-btn');
const aboutButton = document.getElementById('about-btn');
const portfolioButton = document.getElementById('portfolio-btn');
const blogButton = document.getElementById('blog-btn');
const contactButton = document.getElementById('contact-btn');

homeButton.addEventListener('click', homeShow);
function homeShow() {
    home.style.display = "block";
    about.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";
    document.title = "Home";
}

aboutButton.addEventListener('click', aboutShow);
function aboutShow() {
    home.style.display = "none";
    about.style.display = "block";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "none";
    document.title = "About";
}

portfolioButton.addEventListener('click', portfolioShow);
function portfolioShow() {
    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "block";
    blog.style.display = "none";
    contact.style.display = "none";
    document.title = "Portfolio";
}

blogButton.addEventListener('click', blogShow);
function blogShow() {
    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "block";
    contact.style.display = "none";
    document.title = "Blog";
}

contactButton.addEventListener('click', contactShow);
function contactShow() {
    home.style.display = "none";
    about.style.display = "none";
    portfolio.style.display = "none";
    blog.style.display = "none";
    contact.style.display = "block";
    document.title = "Contact";
}