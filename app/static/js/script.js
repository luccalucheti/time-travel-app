const language = 'pt';

function setLanguage(language) {
    language = language

    const body = document.body;

    // Esconde a seleção de idioma
    const languageContainer = document.getElementById('language-select');
    languageContainer.style.display = 'none';

    // Mostra a caixa de diálogo
    const dialog = document.getElementById('dialog-container');
    dialog.style.opacity = '1'; // Torna visível
    dialog.style.display = 'block'; // Garante exibição

    const dialogText = `Olá. Como você deve saber, depois de muito tempo, nós da SensorVille conseguimos desenvolver a primeira máquina do tempo da humanidade. Estamos procurando a pessoa perfeita para passar por essa experiência. Dessa forma, o seguinte formulário busca entender seus objetivos e motivações, além de avaliar suas capacidades para fazer parte desse momento tão importante da história de nossa raça. Você está pronto para embarcar nessa viagem?`;

    let index = 0;
    const interval = setInterval(() => {
        dialog.querySelector('#dialog-text').textContent += dialogText[index];
        index++;

        // Quando o texto terminar
        if (index === dialogText.length) {
            clearInterval(interval);

            // Move a caixa de diálogo para o topo e exibe o portal
            setTimeout(() => {
                dialog.style.transform = 'translate(0vw, -25vh)'; // Move para o topo
                const portalContainer = document.querySelector('.portal-container');
                portalContainer.style.display = 'flex'; // Mostra o portal
                portalContainer.classList.add('animate-portal'); // Animação de crescimento
            }, 3000); // Pequeno delay antes da transição
        }
    }, 10); // Velocidade de escrita
}

// Função para mostrar o formulário e esconder o portal
function showForm() {
    document.querySelector('.portal-container').style.display = 'none';
    document.querySelector('.dialog').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}