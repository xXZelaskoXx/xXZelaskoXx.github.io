"""
file name: yeQuote.py

use: terminal script that returns a censored kanye quote from the kanye.rest api

uses: https://api.kanye.rest/
"""
import argparse
import requests

"""
getKanyeQuote
param: N/A
return: yeQuote:string

purpose: display a kanye west quote within
    raspiaFlask
"""
def getKanyeQuote():
    url = "https://api.kanye.rest/"
    yeQuote = requests.get(url).json()
    yeQuote = yeQuote['quote']
    return yeQuote

"""
censorQuote
param: yeQuote:str
return: yeQuote:str

purpose: reduce possibility of profanity within quote
"""
def censorQuote(yeQuote):

    return yeQuote

#start code here:
if __name__ == "__main__":

    # container for description of code
    ardesc = "This script will retrieve a quote from the Kanye.rest api and censor retrieved quote to be more appropriate for a wider range of audiences."

    # initialize ArgumentParser
    arpar = argparse.ArgumentParser(formatter_class=argparse.RawDescriptionHelpFormatter, description=ardesc)

    # parse arguments from command call
    args = vars(arpar.parse_args())

    quote = getKanyeQuote()

    print(quote)

#end yeQuote.py