# Formulário de Seleção SensorVille

Olá! Este projeto foi desenvolvido para simular um processo de seleção único e criativo utilizando ferramentas modernas de desenvolvimento web. O tema do projeto é inspirado no mundo da computação e hacking retrô, oferecendo uma experiência imersiva e interativa para os usuários.

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
- **`app/`**: Contém os arquivos principais do projeto.
  - **`app.py`**: Arquivo principal do backend em Flask.
  - **`templates/`**: Contém o arquivo HTML do formulário.
    - `form.html`: Interface principal do formulário.
  - **`static/`**: Contém os arquivos estáticos.
    - **`css/`**: Arquivos de estilos.
      - `styles.css`: Estilo principal do projeto.
    - **`js/`**: Arquivos JavaScript.
      - `script.js`: Lógica e interações do frontend.
    - **`img/`**: Imagens usadas no design.
- **`credentials/`**: Contém o arquivo JSON com as credenciais da API do Google.
  - `google_credentials.json`: Credenciais de acesso à API.
- **`uploads/`**: Pasta para armazenar os arquivos enviados pelo formulário.

---

## Configuração do Ambiente

### Dependências
Todas as dependências necessárias para rodar o projeto estão listadas no arquivo `requirements.txt`.
Para instalá-las, execute:

```bash
pip install -r requirements.txt
```

### Configuração do Google Sheets
1. Crie uma planilha no Google Sheets.
2. Compartilhe a planilha com o e-mail presente no campo `client_email` do arquivo `google_credentials.json`.
3. Certifique-se de que a planilha está devidamente configurada para receber os dados.

---

## Execução do Projeto

1. Certifique-se de que o ambiente virtual (venv) está ativado:
   ```bash
   source venv/bin/activate # Para Linux/Mac
   venv\Scripts\activate  # Para Windows
   ```

2. Execute o servidor Flask:
   ```bash
   python app.py
   ```

3. Abra o navegador e acesse:
   ```
http://127.0.0.1:5000
   ```

---

## Detalhes Específicos

### Upload de Arquivos
- O formulário permite que o usuário envie arquivos de imagem ou PDF.
- Os arquivos enviados serão armazenados na pasta `uploads/`.
- Certifique-se de que a pasta `uploads/` existe no diretório do projeto antes de rodar o servidor.

### Planilha do Google Sheets
- Cada submissão do formulário é registrada em uma nova linha na planilha compartilhada.
- As colunas da planilha devem estar configuradas conforme os campos do formulário:
  ```
  Nome | Idade | Experiência | Aptidões | Criatividade | Nome do Arquivo
  ```

---

## Notas Importantes

- **Navegadores Compatíveis:** Certifique-se de testar o site nos navegadores mais populares (Chrome, Firefox, Edge) para verificar a compatibilidade.
- **Segurança:** Não compartilhe o arquivo `google_credentials.json` em repositórios públicos.
- **Reinício do Servidor:** Sempre reinicie o servidor Flask após alterar arquivos do backend.

---

## Contato
Se você tiver dúvidas ou precisar de suporte, entre em contato com o desenvolvedor do projeto.

**Divirta-se com o tema hacker e explore as funcionalidades criadas!**

