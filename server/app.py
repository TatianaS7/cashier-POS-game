# IMPORTS
# Flask framework and jsonify function to convert dictionary to JSON
from flask import Flask, jsonify 

# CORS to allow requests
from flask_cors import CORS

# pos_system dictionary and generateOrder function
from pos_data import pos_system
from _main_ import generateOrder

# timer functions 
# from timerFunctions import startTimer, stopTimer


# Creates instance of Flask application
app = Flask(__name__, static_folder='public')
CORS(app)


# Defines route/function to get data from pos_system module and return as JSON
@app.route('/api/pos_system', methods=['GET'])
def getPOS():
    return jsonify(pos_system)

@app.route('/api/generate_order', methods=['GET'])
def generateOrderRoute():
    order = generateOrder()
    return jsonify(order)

# # Defines routes/function for timer
# @app.route('/start_timer', methods=['POST'])
# def start():
#     currentTime = startTimer()
#     return jsonify(currentTime) 

# @app.route('/stop_timer', methods=['POST'])
# def stop():
#     currentTime = stopTimer()
#     return jsonify(currentTime)



# Checks if script is being run to enable debug mode
if __name__ == '__main__':
    app.run(debug=True)

