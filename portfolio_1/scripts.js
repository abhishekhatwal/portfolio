window.addEventListener('scroll', addanimation);

function addanimation() {

    let img = document.querySelector('.about-img');
    let intro = document.querySelector('.about-intro');
    const rect1 = img.getBoundingClientRect();
    if (rect1.top >= 0 && rect1.bottom <= window.innerHeight * 1.1) {
        img.classList.add('animate-about-img');
        intro.classList.add('animate-about-intro');
    }

    let progressBars = document.querySelectorAll('.progress-inner-html, .progress-inner-css, .progress-inner-javascript, .progress-inner-cpp, .progress-inner-java, .progress-inner-reactjs, .percentage');
    progressBars.forEach(progressBar => {
        const rect = progressBar.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            progressBar.classList.add('animate-progress-inner');
        }
    });

}

function toggle(element) {
    let desc = element.parentNode.nextElementSibling;
    const paragraph = desc.querySelector('p');
    const paragraphHeight = paragraph.offsetHeight;

    if (desc.classList.contains('active')) {
        desc.style.maxHeight = '0';
    } else {
        desc.style.maxHeight = `${paragraphHeight}px`;
    }
    desc.classList.toggle('active');
}

function showhamburger(){
    let hamburgeritem=document.querySelector('.hamburger-item');
       hamburgeritem.classList.toggle('show-hide-hamburger');
}