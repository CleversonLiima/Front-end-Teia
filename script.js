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

// perfil.js

document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const ufInput = document.getElementById('uf');
    const form = document.getElementById('profileForm');

    // Máscara simples para o CEP (00000-000)
    cepInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    // Evento disparado quando o usuário clica fora do input do CEP
    cepInput.addEventListener('blur', async (e) => {
        // Pega apenas os números
        const cepNumeros = e.target.value.replace(/\D/g, '');

        // Verifica se tem 8 dígitos
        if (cepNumeros.length === 8) {
            try {
                // Feedback visual de carregamento (opcional)
                ruaInput.value = "Buscando...";
                
                // Faz a requisição para a API do ViaCEP
                const response = await fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`);
                const data = await response.json();

                if (data.erro) {
                    alert('CEP não encontrado na rede da TEIA.');
                    limparCamposEndereco();
                } else {
                    // Preenche os campos
                    ruaInput.value = data.logradouro;
                    bairroInput.value = data.bairro;
                    cidadeInput.value = data.localidade;
                    ufInput.value = data.uf;
                    
                    // Foca no campo "Número" automaticamente
                    document.getElementById('numero').focus();
                }
            } catch (error) {
                console.error("Erro ao buscar o CEP:", error);
                alert('Erro na conexão com os servidores. Tente novamente.');
                limparCamposEndereco();
            }
        } else if (cepNumeros.length > 0) {
            alert('CEP inválido. Digite os 8 números.');
            limparCamposEndereco();
        }
    });

    function limparCamposEndereco() {
        ruaInput.value = '';
        bairroInput.value = '';
        cidadeInput.value = '';
        ufInput.value = '';
    }

    // Ação do botão salvar
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Efeito visual no botão
        const btn = form.querySelector('.btn-save');
        const textOriginal = btn.innerHTML;
        btn.innerHTML = 'SINCRONIZANDO...';
        btn.style.opacity = '0.7';

        setTimeout(() => {
            alert('Seu Avatar Neural foi atualizado com sucesso!');
            btn.innerHTML = textOriginal;
            btn.style.opacity = '1';
        }, 1500);
    });
});