
from flask import Flask, render_template, session, request, url_for, redirect, flash

app = Flask(__name__)

@app.route("/")
def hello():
    print ("hello there")
    return render_template("home.html")


if __name__ == "__main__":
    app.debug = True
    app.run()
