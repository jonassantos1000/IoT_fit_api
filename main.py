from server import server
from flask import render_template

app = server.app

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    server.run()

