// Lógica da Navbar (Mudar background ao rolar a página)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Quando rolar para baixo: Fundo escuro e borda visível
        navbar.classList.add('bg-dark-900/90', 'backdrop-blur-md', 'border-white/10');
        navbar.classList.remove('bg-transparent', 'border-white/0');
    } else {
        // Quando estiver no topo: Transparente
        navbar.classList.remove('bg-dark-900/90', 'backdrop-blur-md', 'border-white/10');
        navbar.classList.add('bg-transparent', 'border-white/0');
    }
});

console.log("Site PersonalPro carregado com sucesso!");


        function iniciarCarrossel() {
            const track = document.getElementById('carousel-track');
            const btnNext = document.getElementById('btn-next');
            const btnPrev = document.getElementById('btn-prev');

            // 1. Segurança: Se o navegador ainda não carregou o HTML, tenta de novo em 100ms
            if (!track || !btnNext || !btnPrev) {
                setTimeout(iniciarCarrossel, 100);
                return;
            }

            // 2. Segurança: Evita que o carrossel inicie duplicado
            if (track.dataset.iniciado === 'true') return;
            track.dataset.iniciado = 'true';

            const slides = track.children;
            let currentIndex = 0;
            let autoPlayInterval;

            // Função para mover o slide
            function updateSlide() {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Próximo Slide
            function nextSlide() {
                currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
                updateSlide();
            }

            // Slide Anterior
            function prevSlide() {
                currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
                updateSlide();
            }

            // Eventos de clique nos botões
            btnNext.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay(); // Reseta o relógio automático se o usuário clicar
            });

            btnPrev.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay(); // Reseta o relógio automático se o usuário clicar
            });

            // Autoplay (Muda a cada 4 segundos)
            function startAutoPlay() {
                autoPlayInterval = setInterval(nextSlide, 4000);
            }

            // Reseta o tempo automático
            function resetAutoPlay() {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            }

            // Inicia o carrossel automático
            startAutoPlay();
        }

        // Dá a partida no carrossel
        iniciarCarrossel();
  