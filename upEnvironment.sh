#Criando uma env
echo "Criando a env.."
python3.9 -m venv .env
echo "env criada com sucesso!"

#Ativando a env
source .env/bin/activate

echo "Instalando as dependencias..."
pip3 install -r requirements.txt
echo "Dependecias instaladas com sucesso!"

# #Subindo a API do eh
# echo "Iniciando serviço"
# uvicorn app.main:app --reload
# echo "Serviço iniciado.."