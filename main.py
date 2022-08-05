from server import server
from flask import render_template

app = server.app

counter = 1

@app.route('/')
def home():
    global counter
    counter += 1
    return render_template('index.html', copper=counter)


if __name__ == '__main__':
    server.run()
