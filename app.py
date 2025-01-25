from flask import Flask, render_template, request
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

# Configuração do Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name('credentials/google_credentials.json', scope)
client = gspread.authorize(credentials)

# Conecte-se à planilha (substitua pelo nome da sua planilha)
sheet = client.open("Viagem no Tempo - Inscrições").sheet1

@app.route("/")
def form():
    return render_template("form.html")

@app.route("/submit", methods=["POST"])
def submit():
    if request.method == "POST":
        name = request.form.get("name")
        year = request.form.get("year")
        reason = request.form.get("reason")
        # Adicione outras variáveis conforme os campos do formulário

        # Enviar dados para a planilha
        sheet.append_row([name, year, reason])
        return "Formulário enviado com sucesso! Obrigado por participar da Viagem no Tempo."

if __name__ == "__main__":
    app.run(debug=True)
