"""
DYLAN ZELASKO

dzelasko@stumail.norteaststate.edu

Intro to Scripting
        CITC 1317
        Professor: Edgar Bowlin

Final Project main file

Credits to Edgar Bowlin III for RASPIA

source: https://github.com/ed4grrr/RuneScapeAPIAccess
source: https://api.kanye.rest/
"""

#import os for local file management
import os

#import flask applications for hosting and secure_filename for uploads
from flask import Flask, request
from werkzeug.utils import secure_filename

#import raspia resources for api calls
from fileRaspia import *

#import yeQuote to display Kanye Quotes
from yeQuote import getKanyeQuote

#initialize Flask object
app = Flask(__name__)

#instantiate html page for Flask API
@app.route('/', methods=['GET'])
def index():

#container for code of html file, kept local for reduced dependency
    html = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RASPIA Deluxe</title>
        
    <!-- Initialize JQuery -->
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    
    
    <!--initialize stylesheet-->
    
        <link rel="stylesheet" href="static/styles/Styles.css">
    
    
    </head>
    <body>
    
        <h1 class="center" style="border: 4px solid silver !important;background-color:#B59410;">RASPIA Deluxe</h1>
        <h2 class="center" style="font-family:serif;font-size:1.4em;">Hello, and welcome to RASPIA DELUXE, the officially unofficial 
            Flask interface for Runescape 3 player statistics. Additionally, this page features occasionally inspirational
            quotes from Mr. Kanye West via the Kanye West Quotes API! To use this page, either upload a txt file with
            the usernames you would like to search demarcated by a new line between each username, or simply enter the 
            username of the player you would like to search. Thanks to Edgar Bowlin III for use of RASPIA.<br></h2>
        <hr>
        <br>
        
        <form action= "/loadFile" method="POST" enctype="multipart/form-data">
            <input type="file" class="center" name="file">
            <label class="center"><br>Username</label>
            <input class="center type="text" name="userName">
            <br>
            <input type="submit" class="center">
        </form>
    
        <br>
    
            <h2 class="center" id="quote">"""

#Include Kanye Quote in-line with HTML elements
    quoteContainer = getKanyeQuote()
    html += (quoteContainer)
    html += """ - Kanye West</h2>
    <br>
    <hr>
    <br>
    </body>
    <footer class="center">
        This is my final project submission for Edgar Bowlin's course at NESCC, Fall 2024. Special thanks to Edgar Bowlin for Raspia. It has been a great semester, I'll miss you all -Dyzel :)
    </footer>
    </html>
    
    """

#pass constructed HTML to Flask for display
    return html

"""
/loadFile: API call to pass file to RASPIA for use
called via form submit

loadFile: communicate file or Username to RASPIA for further parsing. Outputs RASPIA results 
    to html and textfile in appropriate directory
params: N/A
returns:N/A
"""
@app.route('/loadFile', methods=['GET','POST'])
def loadFile():

#instantiate container for userName
    user = request.form.get("userName")

#determines if a valid username is entered
    if user != "":

    #container for flask_output
        flask_output = """<!DOCTYPE html>
                <html lang="en">
                <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>RASPIA Deluxe</title>

                <!--initialize stylesheet-->

                         <link rel="stylesheet" href="static/styles/Styles.css">


                        </head>
                        <body>

                                <h1 class="center" style="border: 4px solid silver;background-color:#B59410;">RASPIA Deluxe</h1>

                                <hr>
                                <br>

                                <p>"""
    #API call using single username
        raspia_output = nameParse(user)

    #ensure proper formatting in html
        raspia_output = raspia_output.replace("\n","<br>")

    #concatenate raspia output into flask output
        flask_output += raspia_output + """</p>
            </body>
            <footer class="center">
                This is my final project submission for Edgar Bowlin's course at NESCC, Fall 2024. Special thanks to Edgar Bowlin for Raspia. It has been a great semester, I'll miss you all -Dyzel :)
            </footer>
        </html>"""

    #relay information to user
        return flask_output

#end if statement

#elif to check for file field
    elif 'file' in request.files:

#initialize container for html output
        flask_output="""<!DOCTYPE html>
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>RASPIA Deluxe</title>
        
        <!--initialize stylesheet-->
        
                 <link rel="stylesheet" href="static/styles/Styles.css">
        
        
                </head>
                <body>
        
                        <h1 class="center" style="border: 4px solid silver!important;background-color:#B59410;">RASPIA Deluxe</h1>
            
                        <hr>
                        <br>
        
                        <p>"""
    #instantiate file
        file = request.files['file']

    #reduce risk of hostile file upload
        secure = secure_filename(file.filename)

        dirBoi = os.path.dirname(__file__)

        print("dirname= " + dirBoi)

    #ensure correct path for upload folder
        app.config['UPLOAD_FOLDER']=os.path.join(dirBoi, "/Uploads")

    #save file to system for API call
        file.save(os.path.join(dirBoi, secure))

    #call raspia with file and store output
        raspia_output = fileParse(os.path.join(dirBoi, secure))

    #ensure proper formatting in html
        raspia_output = raspia_output.replace("\n","<br>")

    #concatenate raspia output into flask output
        flask_output += raspia_output + """</p>
            </body>
            <footer class="center">
                This is my final project submission for Edgar Bowlin's course at NESCC, Fall 2024. Special thanks to Edgar Bowlin for Raspia. It has been a great semester, I'll miss you all -Dyzel :)
            </footer>
        </html>"""

    #display flask output to end user
        return flask_output

#end elif statement

#informs user that a valid input is required
    else:
        return "Please enter a username or attach a properly formatted file."

#end else statement

#END loadFile()

#initialize Flask runtime
if __name__ == "__main__":
    app.run()

#end raspiaFlask.py