const d = document;
const nav = d.querySelector('nav');
const navBtn = d.querySelector('.btn');
const navBtnBur = d.querySelector('.btn-burguer');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active') ?
    navBtnBur.classList.add('open'):
    navBtnBur.classList.remove('open')
});
