// Função para exibir o painel de login
function showLogin() {
    document.getElementById('login-panel').style.display = 'block';
    document.getElementById('register-panel').style.display = 'none';
}

// Função para exibir o painel de registro
function showRegister() {
    document.getElementById('login-panel').style.display = 'none';
    document.getElementById('register-panel').style.display = 'block';
}

// Função de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login realizado com sucesso!');
        document.getElementById('login-panel').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função de registro
function register() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert('Registro realizado com sucesso! Faça login para continuar.');
        showLogin();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para adicionar a classe "visible" quando o elemento entra na tela
function handleScroll() {
    const sections = document.querySelectorAll('section.fade-in');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', handleScroll);

// Função para enviar mensagem no chat
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    if (!userInput) {
        alert('Por favor, insira sua renda mensal.');
        return;
    }

    // Adiciona a mensagem do usuário ao chat
    const userMessage = document.createElement('p');
    userMessage.textContent = `Você: R$ ${userInput}`;
    userMessage.style.color = '#4a90e2';
    chatMessages.appendChild(userMessage);

    // Resposta do robô com base na renda
    const botMessage = document.createElement('p');
    botMessage.style.color = '#d1d9e6';

    if (userInput <= 1000) {
        botMessage.textContent = 'Robô: Recomendamos começar com Tesouro Selic ou CDBs de liquidez diária.';
    } else if (userInput <= 5000) {
        botMessage.textContent = 'Robô: Considere Tesouro IPCA, CDBs com maior rentabilidade ou LCIs.';
    } else if (userInput <= 10000) {
        botMessage.textContent = 'Robô: Explore LCIs/LCA e fundos de renda fixa diversificados.';
    } else {
        botMessage.textContent = 'Robô: Avalie debêntures incentivadas e fundos imobiliários para diversificação.';
    }

    chatMessages.appendChild(botMessage);

    // Limpa o campo de entrada
    document.getElementById('user-input').value = '';

    // Rola para a última mensagem
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para atualizar o rótulo da faixa de renda
function updateRangeLabel(value) {
    const rangeLabel = document.getElementById('range-label');
    switch (value) {
        case '0':
            rangeLabel.textContent = 'R$ 0 a R$ 1.000';
            break;
        case '1':
            rangeLabel.textContent = 'R$ 1.001 a R$ 5.000';
            break;
        case '2':
            rangeLabel.textContent = 'R$ 5.001 a R$ 10.000';
            break;
        case '3':
            rangeLabel.textContent = 'R$ 10.001 ou mais';
            break;
    }
}

// Função para redirecionar com base na faixa de renda
function redirectToPage() {
    const incomeRange = document.getElementById('income-range').value;

    switch (incomeRange) {
        case '0':
            window.location.href = 'renda-0-1000.html';
            break;
        case '1':
            window.location.href = 'renda-1001-5000.html';
            break;
        case '2':
            window.location.href = 'renda-5001-10000.html';
            break;
        case '3':
            window.location.href = 'renda-10001-mais.html';
            break;
    }
}