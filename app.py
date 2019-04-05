#Britni Canale
#SoftDev1 pd 6
#K26 -- Getting More REST
#2018-11-15


from flask import Flask, render_template, session, request, url_for, redirect, flash

app = Flask(__name__)

@app.route("/")
def hello():
    print ("hello there")
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
