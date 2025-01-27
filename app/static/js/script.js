// Inicia a lingua como pt.
const language = 'pt';

// Textos configurados em inglês e português, com cada elementos ligados ao ID de algum elemento HTML. 
const translations = {
    pt: {
        dialogText: `Olá. Como você deve saber, a SensorVille enfrenta um momento complicado. Uma falha no Sistema Central de Sincronização (SCS) causou a desconexão e desestabilização de nossa infraestrutura global de sensores. O SCS é o coração de nossa operação, responsável por conectar milhões de dispositivos industriais, sensores IIoT e sistemas autônomos em tempo real. A falha comprometeu:
        - Dados críticos sendo processados entre redes industriais.
        - Sensores desconectados, causando falhas em sistemas dependentes.
        - Infraestrutura exposta a ataques cibernéticos, pondo em risco a segurança global.`,
        start: "Iniciar",
        formTitle: "Bem-vindo ao Terminal Sentinel, você está acessando uma área de segurança máxima. Para restaurar o sistema, precisamos de indivíduos altamente qualificados para investigar e neutralizar o problema. Sua missão será participar do Projeto Sentinel, que visa recuperar dados corrompidos, proteger a rede contra ataques, e restaurar a funcionalidade do SCS. Complete o formulário a seguir para demonstrar suas habilidades e qualificações. Apenas os candidatos mais adequados serão selecionados para essa operação crítica.",
        categoryTitle1: "Informações Básicas",
        nameLabel: "Nome Completo:",
        ageLabel: "Idade:",
        multiChoiceQuest1: "Você já teve experiência profissional em áreas relacionadas a desenvolvimento de software ou segurança cibernética?",
        opt1_1: "Sim",
        opt1_2: "Não",
        categoryTitle2: "Aptidão",
        multiChoiceQuest2: "Você se considera apto para alguma(s) das seguintes categorias?",
        opt2_1: "Análise de logs e dados.",
        opt2_2: "Decodificação de mensagens criptografadas.",
        opt2_3: "Implementação de protocolos de segurança.",
        opt2_4: "Gerenciamento de redes.",
        multiChoiceQuest3: "Você já participou de um evento ou competição de cibersegurança?",
        opt3_1: "Sim",
        opt3_2: "Não",
        fileUploadQuest: "Projete um sistema para proteger uma rede de sensores críticos de invasões externas. Envie um diagrama do sistema.",
        fileUploadLabel: "Insira um arquivo.",
        categoryTitle3: "criatividade",
        compromisedNodeLabel: "Você descobre que um nó da rede foi comprometido, expondo sensores críticos a invasões. Quais medidas você tomaria?",
        improveSecurityLabel: "Se você pudesse desenvolver qualquer ferramenta para aprimorar a segurança cibernética, qual seria e como funcionaria?",
        multiChoiceQuest4: "Quais destes itens você usaria para configurar uma rede segura?",
        opt4_1: "Firewall baseado em IA.",
        opt4_2: "Redes privadas virtuais (VPNs).",
        opt4_3: "Segmentação de rede.",
        opt4_4: "Sensores de intrusão.",
        realTimeProgrammingLabel: "Explique como lidaria com uma equipe que tem dificuldade em identificar e corrigir falhas críticas em tempo real.",
        submitButton: "Enviar"
    },
    en: {
        dialogText: `Hello. As you may know, SensorVille is facing a complex monent. A failure in the Central Synchronization System (SCS) has caused the disconnection and destabilization of our global sensor infrastructure. The SCS is the heart of our operation, responsible for connecting millions of industrial devices, IIoT sensors, and autonomous systems in real time. The failure has compromised:
        - Critical data being processed between industrial networks.
        - Disconnected sensors, causing failures in dependent systems.
        - Infrastructure exposed to cyberattacks, putting global security at risk.`,
        start: "Start",
        formTitle: "Welcome to the Sentinel Terminal, you are accessing a maximum-security area. To restore the system, we need highly qualified individuals to investigate and neutralize the problem. Your mission will be to participate in the Sentinel Project, which aims to recover corrupted data, protect the network from attacks, and restore the functionality of the SCS. Complete the following form to demonstrate your skills and qualifications. Only the most suitable candidates will be selected for this critical operation.",
        categoryTitle1: "Basic Information",
        nameLabel: "Full Name:",
        ageLabel: "Age:",
        multiChoiceQuest1: "Have you ever had professional experience in areas related to software development or cybersecurity?",
        opt1_1: "Yes",
        opt1_2: "No",
        categoryTitle2: "Aptitude",
        multiChoiceQuest2: "Do you consider yourself qualified in any of the following categories?",
        opt2_1: "Log and data analysis.",
        opt2_2: "Decrypting encrypted messages.",
        opt2_3: "Implementing security protocols.",
        opt2_4: "Network management.",
        multiChoiceQuest3: "Have you ever participated in a cybersecurity event or competition?",
        opt3_1: "Yes",
        opt3_2: "No",
        fileUploadQuest: "Design a system to protect a critical sensor network from external intrusions. Upload a diagram of the system.",
        fileUploadLabel: "Upload a file.",
        categoryTitle3: "Creativity",
        compromisedNodeLabel: "You discover that a network node has been compromised, exposing critical sensors to intrusions. What measures would you take?",
        improveSecurityLabel: "If you could develop any tool to improve cybersecurity, what would it be and how would it work?",
        multiChoiceQuest4: "Which of these items would you use to set up a secure network?",
        opt4_1: "AI-based firewall.",
        opt4_2: "Virtual private networks (VPNs).",
        opt4_3: "Network segmentation.",
        opt4_4: "Intrusion sensors.",
        realTimeProgrammingLabel: "Explain how you would deal with a team struggling to identify and fix critical failures in real-time.",
        submitButton: "Submit"
    },
};


// Função executada ao clicar na linguagem. Ela define a língua da página, desaparece com alguns elementos e surge com os próximos
function setLanguage(language) {
    // Atualiza os textos no HTML com base na linguagem selecionada
    document.getElementById("start").textContent = translations[language].start;
    document.getElementById("form-title").textContent = translations[language].formTitle;
    document.getElementById("category-title1").textContent = translations[language].categoryTitle1;
    document.getElementById("name-label").textContent = translations[language].nameLabel;
    document.getElementById("age-label").textContent = translations[language].ageLabel;
    document.getElementById("multi-choice-quest1").textContent = translations[language].multiChoiceQuest1;
    document.getElementById("opt1-1").textContent = translations[language].opt1_1;
    document.getElementById("opt1-2").textContent = translations[language].opt1_2;
    document.getElementById("category-title2").textContent = translations[language].categoryTitle2;
    document.getElementById("multi-choice-quest2").textContent = translations[language].multiChoiceQuest2;
    document.getElementById("opt2-1").textContent = translations[language].opt2_1;
    document.getElementById("opt2-2").textContent = translations[language].opt2_2;
    document.getElementById("opt2-3").textContent = translations[language].opt2_3;
    document.getElementById("opt2-4").textContent = translations[language].opt2_4;
    document.getElementById("multi-choice-quest3").textContent = translations[language].multiChoiceQuest3;
    document.getElementById("opt3-1").textContent = translations[language].opt3_1;
    document.getElementById("opt3-2").textContent = translations[language].opt3_2;
    document.getElementById("file-upload-quest").textContent = translations[language].fileUploadQuest;
    document.getElementById("file-upload-label").textContent = translations[language].fileUploadLabel;
    document.getElementById("category-title3").textContent = translations[language].categoryTitle3;
    document.getElementById("compromised-node-label").textContent = translations[language].compromisedNodeLabel;
    document.getElementById("improve-security-label").textContent = translations[language].improveSecurityLabel;
    document.getElementById("multi-choice-quest4").textContent = translations[language].multiChoiceQuest4;
    document.getElementById("opt4-1").textContent = translations[language].opt4_1;
    document.getElementById("opt4-2").textContent = translations[language].opt4_2;
    document.getElementById("opt4-3").textContent = translations[language].opt4_3;
    document.getElementById("opt4-4").textContent = translations[language].opt4_4;
    document.getElementById("real-time-programming-label").textContent = translations[language].realTimeProgrammingLabel;
    document.getElementById("submit-button").textContent = translations[language].submitButton;

    const body = document.body;

    // Esconde a seleção de idioma
    const languageContainer = document.getElementById('language-select');
    languageContainer.style.display = 'none';

    // Mostra a caixa de diálogo
    const dialog = document.getElementById('dialog-container');
    const dialogText = translations[language].dialogText;

    dialog.style.opacity = '1'; // Torna visível
    dialog.style.display = 'block'; // Garante exibição
    dialog.querySelector('#dialog-text').textContent = "";

    let index = 0;
    const interval = setInterval(() => {
        dialog.querySelector('#dialog-text').textContent += dialogText[index];
        index++;

        // Quando o texto terminar
        if (index === dialogText.length) {
            clearInterval(interval);

            // Move a caixa de diálogo para o topo e exibe o start-button
            setTimeout(() => {
                dialog.style.transform = 'translate(0vw, -20vh)'; // Move para o topo
                const startButtonContainer = document.querySelector('.start-button-container');
                startButtonContainer.style.display = 'flex'; // Mostra o start-button
                startButtonContainer.classList.add('animate-start-button'); // Animação de crescimento
            }, 1000); // Pequeno delay antes da transição
        }
    }, 25); // Velocidade de escrita
}

// Função para fazer animações
function animateProperty(element, property, value, duration) {
    return new Promise((resolve) => {
        element.style.transition = `${property} ${duration}s ease`;
        element.style[property] = value;
        setTimeout(resolve, duration * 1000); // Aguarda o término da animação
    });
}

// Função para mostrar o formulário e esconder o start-button
async function showForm() {
    document.querySelector('body').style.backgroundImage = 'none';
    document.querySelector('.start-button-container').style.display = 'none';
    document.querySelector('.dialog').style.display = 'none';
    document.getElementById('topline').style.display = 'none';
    document.getElementById('botline').style.display = 'none';
    document.getElementById('rightline').style.display = 'none';
    document.getElementById('leftline').style.display = 'none';
    document.getElementById('gif2').style.display = 'none';
    document.getElementById('gif3').style.display = 'none';
    document.getElementById('form-content').style.display = 'flex';
    const formContainer = document.getElementById('form-container') 
    formContainer.style.display = 'flex';
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
