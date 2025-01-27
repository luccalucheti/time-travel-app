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

    const dialogText = `Olá. Como você deve saber, a SensorVille enfrenta uma crise global. Uma falha no Sistema Central de Sincronização (SCS) causou a desconexão e desestabilização de nossa infraestrutura global de sensores. O SCS é o coração de nossa operação, responsável por conectar milhões de dispositivos industriais, sensores IIoT e sistemas autônomos em tempo real. A falha comprometeu:
    - Dados críticos sendo processados entre redes industriais.
    - Sensores desconectados, causando falhas em sistemas dependentes.
    - Infraestrutura exposta a ataques cibernéticos, pondo em risco a segurança global.`;

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
            }, 1000); // Pequeno delay antes da transição
        }
    }, 1); // Velocidade de escrita
}

// Função para fazer animações
function animateProperty(element, property, value, duration) {
    return new Promise((resolve) => {
        element.style.transition = `${property} ${duration}s ease`;
        element.style[property] = value;
        setTimeout(resolve, duration * 1000); // Aguarda o término da animação
    });
}

// Função para mostrar o formulário e esconder o portal
async function showForm() {
    document.querySelector('.portal-container').style.display = 'none';
    document.querySelector('.dialog').style.display = 'none';
    document.getElementById('topline').style.display = 'none';
    document.getElementById('botline').style.display = 'none';
    document.getElementById('rightline').style.display = 'none';
    document.getElementById('leftline').style.display = 'none';
    document.getElementById('gif1').style.display = 'none';
    document.getElementById('gif2').style.display = 'none';
    document.getElementById('gif3').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('form-content').style.display = 'flex';
    const formContainer = document.getElementById('form-container') 
    formContainer.style.display = 'flex';
    await animateProperty(formContainer, 'left', '4vw', 0.01);
    await animateProperty(formContainer, 'left', '10vw', .7);
    await animateProperty(formContainer, 'height', '80vh', .7);
    await animateProperty(formContainer, 'width', '80vw', .7);
}

const fileInput = document.getElementById('file-upload'); // Input de arquivo
const fileDropzone = document.querySelector('.file-dropzone'); // Label que age como dropzone

// Adiciona evento ao input para capturar alterações
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        // Obtém o nome do arquivo selecionado
        const fileName = fileInput.files[0].name;

        // Atualiza o texto do label dropzone com o nome do arquivo
        fileDropzone.textContent = `Arquivo: ${fileName}`;
        
        // Adiciona uma classe para feedback visual (opcional)
        fileDropzone.classList.add('file-selected');
    } else {
        // Reseta o texto do label dropzone se nenhum arquivo for selecionado
        fileDropzone.textContent = "Insira um arquivo.";
        fileDropzone.classList.remove('file-selected');
    }
});
