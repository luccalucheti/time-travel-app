from flask import Flask, render_template, request
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import os

app = Flask(__name__)

# Configuração do Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name('credentials/google_credentials.json', scope)
client = gspread.authorize(credentials)

# Conecte-se à planilha (substitua pelo nome da sua planilha)
sheet = client.open("FormularioSensorVille").sheet1

@app.route("/")
def form():
    return render_template("form.html")

@app.route("/submit", methods=["POST"])
def submit():
    if request.method == "POST":
        name = request.form.get("name")
        age = request.form.get("age")
        experience = request.form.get("under-pressure-experience")
        fitness_options = request.form.getlist("fitness-option")
        cybersecurity_event = request.form.get("cybersecurity-event")
        file_uploaded = request.files.get("file-upload")
        creativity = request.form.get("compromised-node")
        improve_security = request.form.get("improve-security")
        item = request.form.get("item-option")
        real_time_programming = request.form.get("real-time-programming")

        # Caminho absoluto para a pasta 'uploads'
        upload_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")

        # Criar a pasta se ela não existir
        if not os.path.exists(upload_folder):
            os.makedirs(upload_folder)

        # Salvar o arquivo
        if file_uploaded:
            file_uploaded.save(os.path.join(upload_folder, file_uploaded.filename))

        # Adicionar os dados na planilha
        sheet.append_row([name, age, experience, ", ".join(fitness_options), cybersecurity_event, file_uploaded.filename if file_uploaded else "Nenhum arquivo enviado", creativity, improve_security, item, real_time_programming])
        return "Formulário enviado com sucesso! Obrigado por participar."


if __name__ == "__main__":
    app.run(debug=True)
