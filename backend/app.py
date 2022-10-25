from flask import render_template 
from colossus import create_app

app = create_app()

@app.route('/', methods=['GET'])
def root():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
