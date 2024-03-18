# Imports Flask framework and jsonify function to convert dictionary to JSON
from flask import Flask, jsonify 

# Imports CORS to allow requests
from flask_cors import CORS


# Imports pos_system dictionary and generateOrder function from respective modules
from pos_data import pos_system
from _main_ import generateOrder

# Creates instance of Flask application
app = Flask(__name__)
CORS(app)

# Defines route/function to get data from pos_system module and return as JSON
@app.route('/pos_system', methods=['GET'])
def getPOS():
    return jsonify(pos_system)

@app.route('/generate_order', methods=['GET'])
def generateOrderRoute():
    order = generateOrder()
    return jsonify(order)

# Checks if script is being run to enable debug mode
if __name__ == '__main__':
    app.run(debug=True)

