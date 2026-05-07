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