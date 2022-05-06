from flask import Flask
from utils import *

app = Flask(__name__)

@app.route("/")
def request_orders():
    return DataGenerator(100)

app.run(host="0.0.0.0",port=5000)
print()