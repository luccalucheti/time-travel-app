# Formulário de Seleção SensorVille

Olá! Este projeto foi desenvolvido para simular um processo de seleção único e criativo utilizando ferramentas modernas de desenvolvimento web. O tema utilizado foi inspirado no mundo da computação e hacking retrô, buscando oferecer uma experiência imersiva e interativa para os usuários.

## Principais Ferramentas Utilizadas

- **Linguagens de Programação e Tecnologias:**
  - Python (backend)
  - HTML, CSS, JavaScript (frontend)
- **Frameworks e Bibliotecas:**
  - Flask: para criação do servidor backend
  - Gspread: para integração com Google Sheets
  - OAuth2Client: para autenticação com a API do Google
  - Fontes Orbitron e Courier New para o design temático

---

## Estrutura do Projeto

### Diretórios e Arquivos Principais
- **`app/`**:                     Contém os arquivos principais do projeto.
  - **`app.py`**:                 Arquivo principal do backend em Flask.
  - **`templates/`**:             Contém o arquivo HTML do formulário.
    - `form.html`:                Interface principal do formulário.
  - **`static/`**:                Contém os arquivos estáticos.
    - **`css/`**:                 Arquivos de estilos.
      - `styles.css`:             Estilo principal do projeto.
    - **`js/`**:                  Arquivos JavaScript.
      - `script.js`:              Lógica e interações do frontend.
    - **`img/`**:                 Imagens usadas no design.
- **`credentials/`**:             Contém o arquivo JSON com as credenciais da API do Google.
  - `google_credentials.json`:    Credenciais de acesso à API.
- **`uploads/`**:                 Pasta para armazenar os arquivos enviados pelo formulário.

---

## Configuração do Ambiente

### Dependências
Todas as dependências necessárias para rodar o projeto estão listadas no arquivo `requirements.txt`.
Para instalá-las, execute:

```bash
pip install -r requirements.txt
```

### Configuração do Google Sheets
1. A planilha está criada e absolutamente configurada para receber os dados. O link dela foi encaminhado no email.
2. Em relação ao arquivo de imagem anexado no formulário, a planilha contém uma coluna que recebe o nome do arquivo. O arquivo de fato vai para a pasta "app/uploads", salvo localmente.

---

## Execução do Projeto

1. Caso preferir, inicie um ambiente virtual (venv):
   ```bash
   python -m venv *nomedovenv*
   source venv/bin/activate # Para Linux/Mac
   venv\Scripts\activate  # Para Windows
   ```

2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

3. Execute o servidor Flask:
   ```bash
   python app.py
   ```

4. Abra o navegador e acesse (espere até abrir):
   ```
http://127.0.0.1:5000
   ```

---

## Notas Importantes

- A primeira vez que o servidor for aberto (o comando "python ./app/app.py" for executado), ele levará um certo tempo (até 5min) para inicializar, visto que o site estava até então fora do ar. Caso queira refazer o formulário para testar outras respostas e interações, nao feche o servidor, apenas abra novamente 'http://127.0.0.1:5000'
- **Navegadores Compatíveis:** Certifique-se de testar o site nos navegadores mais populares (Chrome, Firefox, Edge) para verificar a compatibilidade.
- **Segurança:** Não compartilhe o arquivo `google_credentials.json` em repositórios públicos.

---

## Detalhes Específicos

### Upload de Arquivos
- O formulário permite que o usuário envie arquivos de imagem ou PDF.
- Os arquivos enviados serão armazenados na pasta `app/uploads/`.

### Planilha do Google Sheets
- A planilha está criada e absolutamente configurada para receber os dados. O link dela foi encaminhado no email.
- Cada submissão do formulário é registrada em uma nova linha na planilha compartilhada.
- Em relação ao arquivo de imagem anexado no formulário, a planilha contém uma coluna que recebe o nome do arquivo. O arquivo de fato vai para a pasta "app/uploads", salvo localmente.
---

## Contato
Se você tiver dúvidas ou precisar de suporte, entre em contato!
Lucca Roncador Lucheti
(18) 99686-3431
luccarlucheti@gmail.com
www.linkedin.com/in/lucca-lucheti-105aa6234
https://github.com/luccalucheti
**Divirta-se!**