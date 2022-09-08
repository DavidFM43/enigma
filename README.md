# Colossus

Proyecto para el curso de Introducción a la criptografia y a la teoria de la informacion.

## Development setup

# Flask Backend

1. Create a python virtual environment:
```bash
make create_environment
```
2. Activate the enviroment and run:
```bash
make requirements
```
3. Set the FLASK_APP environment variable:
```bash
(Unix/Mac) export FLASK_APP=colossus
(Windows) set FLASK_APP=colossus
(Powershell) $env:FLASK_APP="colossus"
```
4. Run the application locally:
```bash
flask run
```

# Frontend

First install NodeJs and npm.

Go to the `frontend` directory:

Then run:
```bass
npm install -g @angular/cli
npm install
npm start
```

Navigate to http://localhost:4200
