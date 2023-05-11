from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    data = []
    with open('source.json', 'r') as file:
        data = json.load(file)
    return render_template("index.html", data=data)
