// Função para mostrar o formulário e esconder o portal
function showForm() {
    document.querySelector('.portal-container').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}

function setLanguage(language) {
    // Esconde a seleção de idioma
    const languageContainer = document.getElementById('language-select');
    languageContainer.style.display = 'none';

    // Mostra o portal com o texto no idioma selecionado
    const portalText = document.querySelector('.portal-text');
    portalText.textContent = translations[language].portalText;

    const portalContainer = document.querySelector('.portal-container');
    portalContainer.style.display = 'flex'; // Exibe o portal
    portalContainer.classList.add('animate-portal'); // Animação de crescimento

    // Atualiza o texto do formulário
    document.getElementById('form-title').textContent = translations[language].formTitle;
    document.getElementById('name-label').textContent = translations[language].nameLabel;
    document.getElementById('year-label').textContent = translations[language].yearLabel;
    document.getElementById('reason-label').textContent = translations[language].reasonLabel;
    document.getElementById('submit-button').textContent = translations[language].submitButton;

    // Define o idioma do site (opcional)
    document.documentElement.lang = language;
}

const translations = {
    pt: {
        portalText: "Iniciar",
        formTitle: "Viagem no Tempo",
        nameLabel: "Nome Completo:",
        yearLabel: "Ano de Destino:",
        reasonLabel: "Motivo da Viagem:",
        submitButton: "Enviar",
    },
    en: {
        portalText: "Start",
        formTitle: "Time Travel",
        nameLabel: "Full Name:",
        yearLabel: "Destination Year:",
        reasonLabel: "Reason for Travel:",
        submitButton: "Submit",
    },
};