# time module - Provides time related functions

import time 

current_time = 25

def startTimer():
    # Accesses global variable
    global current_time
    # Sets current time to 25
    current_time = 25
    while current_time > 0:
        print(current_time)
        # Stops execution for 1 second
        time.sleep(1)
        # Decrements current time by 1
        current_time -= 1


def stopTimer():
    global current_time
    # Sets current time back to 0
    current_time = 0


# startTimer()
# stopTimer()    

