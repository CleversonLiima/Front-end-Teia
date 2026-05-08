document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mostrar/Ocultar Senha
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Troca a cor do ícone para indicar atividade
        togglePassword.style.color = type === 'text' ? '#2EE5E5' : '#8B94A7';
    });

    // 2. Seleção de Tags (Múltipla escolha)
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
        });
    });

    // 3. Simulação de envio do formulário
    const form = document.querySelector('#registrationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cadastro enviado com sucesso! Próximo passo: Foco.');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // LÓGICA DA TELA DE CADASTRO (index.html)
    // ==========================================
    const togglePasswordRegister = document.querySelector('#togglePassword');
    const passwordInputRegister = document.querySelector('#password');

    // Verifica se os elementos do cadastro existem na página atual
    if (togglePasswordRegister && passwordInputRegister) {
        togglePasswordRegister.addEventListener('click', () => {
            const type = passwordInputRegister.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInputRegister.setAttribute('type', type);
            togglePasswordRegister.style.color = type === 'text' ? '#2EE5E5' : '#8B94A7';
        });

        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
            });
        });
    }

    // ==========================================
    // LÓGICA DA TELA DE LOGIN (login.html)
    // ==========================================
    const togglePasswordLogin = document.querySelector('#toggleLoginPassword');
    const passwordInputLogin = document.querySelector('#loginPassword');

    // Verifica se os elementos do login existem na página atual
    if (togglePasswordLogin && passwordInputLogin) {
        togglePasswordLogin.addEventListener('click', () => {
            const type = passwordInputLogin.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInputLogin.setAttribute('type', type);
            togglePasswordLogin.style.color = type === 'text' ? '#2EE5E5' : '#8B94A7';
        });
    }

});

// ================================
// ANIMAÇÃO AO SCROLL
// ================================

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// ================================
// CONTADOR DAS ESTATÍSTICAS
// ================================

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = (counter) => {
  let start = 0;
  const end = parseInt(counter.innerText.replace("+", "").replace("%", ""));

  const update = () => {
    start += end / 80;

    if (start < end) {
      counter.innerText = Math.floor(start) + (counter.innerText.includes("%") ? "%" : "");
      requestAnimationFrame(update);
    } else {
      counter.innerText = counter.innerText;
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});


// ================================
// FAQ INTERATIVO (ÍCONE GIRANDO)
// ================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("toggle", () => {
    const icon = item.querySelector(".faq-icon");

    if (item.open) {
      icon.style.transform = "rotate(45deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  });
});


// ================================
// PARALLAX NA IMAGEM HERO
// ================================

const hero = document.querySelector(".hero-image");

document.addEventListener("mousemove", (e) => {
  if (!hero) return;

  const x = (window.innerWidth / 2 - e.pageX) / 60;
  const y = (window.innerHeight / 2 - e.pageY) / 60;

  hero.style.transform = `translate(${x}px, ${y}px)`;
});