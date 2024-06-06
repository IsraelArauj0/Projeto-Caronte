document.addEventListener('DOMContentLoaded', () => {
    // Alert
    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Não jogue lixo na água!!!!');
    });

    // Validação de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'admin' && password === '1234') {
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
});

function initCarrossel(carrosselId) {
    const carrossel = document.getElementById(carrosselId);
    const slides = carrossel.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
}

//Inicia os carrosseis
initCarrossel('carrossel1');
initCarrossel('carrossel2');
initCarrossel('carrossel3');
initCarrossel('carrossel4');   

    const sectionProblem = document.querySelector('.problem span');
    sectionProblem.style.fontWeight = 'bold';

    console.log('JavaScript carregado com sucesso.');
