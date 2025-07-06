"""
DYLAN ZELASKO

dzelasko@stumail.norteaststate.edu

Intro to Scripting
        CITC 1317
        Professor: Edgar Bowlin

Final Project supplementary file

Credits to Edgar Bowlin III for RASPIA

source: https://github.com/ed4grrr/RuneScapeAPIAccess
"""
#tkinter for gui and fileopener
from tkinter import *
from tkinter import filedialog

#import os pathing to specify output directory
import os.path

#import for date
from datetime import date

#class that will make our code work (thanks professor)
import RunescapeHiscoresAPI

#variables
playerList:list
receivedData:dict
writable:str = ""
playerName:str = ""

#instantiate the date
today:str = str(date.today())

#instantiate pathing
dirname = os.path.dirname(__file__)
targetDirectory = os.path.join(dirname, ("./Skill_Reports/" + today + "/"))

#create directory if none available
if not os.path.isdir(targetDirectory):
        os.mkdir(targetDirectory)

#instantiate root window
root = Tk()

#hide root window
root.withdraw()

"""
:param N/A

:return N/A

#return prompt to open file in html - TESTED, functional
"""

def openFile():
        return filedialog.askopenfilename()

"""
:param playerFile

:return players:list players to be passed to Raspia for API response

#take the open file and turn it into a program friendly form --TESTED, VALID RETURN--
"""


def loadPlayerNamesToBeSearched(playerFile):

        # Variable declaration
        players:list = []

        # line container
        lineContainer:str = "placeholder"

        # open file to read by line
        f = open(playerFile, "r")

        # loop to run through each line of the player file
        while len(lineContainer) != 0:
                lineContainer = f.readline()
                lineContainer= lineContainer.replace("\n", "")
                players.append(lineContainer)

        # close file
        f.close()

        #remove empty value
        players.pop()

        return players

"""
:param playerToSearch:str passed arg to raspia

:return raw skill list from raspia

#get player information from API, TESTED, FUNCTIONAL
"""

def getPlayerData(playerToSearch:str) -> list:

        #INIT RASPIA interface

        #WOULD LIKE THIS TO MATCH IF POSSIBLE
        rasp = RunescapeHiscoresAPI.RunescapeHiScoresAPI()

        #pass arg to raspia
        receivedData = rasp.get_player_hiscore(playerToSearch)

        return receivedData

"""
:param receivedData:dict

:return toWrite:str, to be written to file and console

#take loaded data from API and make it legible
"""

def formatPlayerData(playerName, receivedData):

        toWrite = ""

        toWrite += "RuneScape 3 Current Skill Levels as of {}\n\nUsername: {}\n\n\n\nSkill Name, Global Rank, Level, Experience\n\nOverall: {}\nAttack: {}\nDefence: {}\nStrength: {}\nConstitution: {}\nRanged: {}\nPrayer: {}\nMagic: {}\nCooking: {}\nWoodcutting: {}\nFletching: {}\nFishing: {}\nFiremaking: {}\nCrafting: {}\nSmithing: {}\nMining: {}\nHerblore: {}\nAgility: {}\nThieving: {}\nSlayer: {}\nFarming: {}\nRunecrafting: {}\nHunter: {}\nConstruction: {}\nSummoning: {}\nDungeoneering: {}\nDivination: {}\nInvention: {}\nArchaeology: {}\nNecromancy: {}\n".format(
                today, playerName, receivedData["Overall"], receivedData["Attack"], receivedData["Defence"],
                receivedData["Strength"], receivedData["Constitution"], receivedData["Ranged"], receivedData["Prayer"],
                receivedData["Magic"], receivedData["Cooking"], receivedData["Woodcutting"], receivedData["Fletching"],
                receivedData["Fishing"], receivedData["Firemaking"], receivedData["Crafting"], receivedData["Smithing"],
                receivedData["Mining"], receivedData["Herblore"], receivedData["Agility"], receivedData["Thieving"],
                receivedData["Slayer"], receivedData["Farming"], receivedData["Runecrafting"], receivedData["Hunter"],
                receivedData["Construction"], receivedData["Summoning"], receivedData["Dungeoneering"],
                receivedData["Divination"], receivedData["Invention"], receivedData["Archaeology"],
                receivedData["Necromancy"])

        toWrite += "\n\nFree to Play Skills (Alphabetical)\n\nAttack: {}\nConstitution: {}\nCooking: {}\nCrafting: {}\nDefence: {}\nDungeoneering: {}\nFiremaking: {}\nFishing: {}\nFletching: {}\nMagic: {}\nMining: {}\nPrayer: {}\nRanged: {}\nRunecrafting: {}\nSmithing: {}\nStrength: {}\nWoodcutting: {}\n".format(
                receivedData["Attack"], receivedData["Constitution"], receivedData["Cooking"], receivedData["Crafting"],
                receivedData["Defence"], receivedData["Dungeoneering"], receivedData["Firemaking"],
                receivedData["Fishing"], receivedData["Fletching"], receivedData["Magic"], receivedData["Mining"],
                receivedData["Prayer"], receivedData["Ranged"], receivedData["Runecrafting"], receivedData["Smithing"],
                receivedData["Strength"], receivedData["Woodcutting"])
        toWrite +="\n\nMember Skills (Alphabetical)\n\nAgility: {}\nArchaeology: {}\nConstruction: {}\nDivination: {}\nFarming: {}\nHerblore: {}\nHunter: {}\nInvention: {}\nNecromancy: {}\nSlayer: {}\nSummoning: {}\nThieving: {}\n".format(receivedData["Agility"],receivedData["Archaeology"],receivedData["Construction"],
                receivedData["Divination"],receivedData["Farming"],receivedData["Herblore"],receivedData["Hunter"],receivedData["Invention"],receivedData["Necromancy"],receivedData["Slayer"],receivedData["Summoning"],receivedData["Thieving"])

        toWrite +="\n\nSkills Sorted By Type (Alphabetical)\n\nCombat Skills:\n\nAttack: {}\nConstitution: {}\nDefence: {}\nMagic: {}\nNecromancy: {}\nPrayer: {}\nRanged: {}\nStrength: {}\nSummoning: {}\n".format(receivedData["Attack"],
                receivedData["Constitution"],receivedData["Defence"],receivedData["Magic"],receivedData["Necromancy"],receivedData["Prayer"],receivedData["Ranged"],receivedData["Strength"],receivedData["Summoning"])
        toWrite +="\n\nGathering Skills:\n\nArchaeology: {}\nDivination: {}\nFarming: {}\nFishing: {}\nHunter: {}\nMining: {}\nWoodcutting: {}\n".format(receivedData["Archaeology"],
                receivedData["Divination"],receivedData["Farming"],receivedData["Fishing"],receivedData["Hunter"],receivedData["Mining"],receivedData["Woodcutting"])
        toWrite +="\n\nArtisan Skills:\n\nConstruction: {}\nCooking: {}\nCrafting: {}\nFiremaking: {}\nFletching: {}\nHerblore: {}\nRunecrafting: {}\nSmithing: {}\n".format(receivedData["Construction"],
                receivedData["Cooking"],receivedData["Crafting"],receivedData["Firemaking"],receivedData["Fletching"],receivedData["Herblore"],receivedData["Runecrafting"],receivedData["Smithing"])
        toWrite +="\n\nSupport Skills:\n\nAgility: {}\nDungeoneering: {}\nInvention: {}\nSlayer: {}\nThieving: {}\n".format(receivedData["Agility"],
                receivedData["Dungeoneering"],receivedData["Invention"],receivedData["Slayer"],receivedData["Thieving"])

        toWrite +="\n\nThank you for using this tool. Special thanks to Edgar Bowlin III for access to RASPIA.\n\n-FIN-\n\n\n"

        toWrite = str(toWrite)

        toWrite = toWrite.replace("[","")
        toWrite = toWrite.replace("]","")
        toWrite = toWrite.replace(".0","")

        return toWrite
"""
:param N/A

:return N/A

#return raw data to user through console, NOT USED
"""

def printDataToScreen():
        return writable

"""
:param playerName:str

:return N/A

#ask user what to save file as and save output to txt
"""

def printSaveDataToFile(playerName, writable):

        dirname = os.path.dirname(__file__)
        targetDirectory = os.path.join(dirname, ("./Skill_Reports/" + today + "/"))
        f = open(targetDirectory + playerName + "-Skills_Report-" + today + ".txt", "w")
        f.write(writable)
        f.close()
        return

"""
param: playerFile
return: flaskOutput:str

purpose: implement methods previously defined in file to interact with RASPIA
        and local file system. Formats and records response from RASPIA.
"""

#START here
def fileParse(playerFile):

        flaskOutput: str = "\n\n"

        #STEP 1, get players from file

        playerList = (loadPlayerNamesToBeSearched(playerFile))

        i = 0

        #STEP 2 getPlayerData

        for x in playerList:

                #stores response from RASPIA into receivedData
                receivedData = getPlayerData(playerList[i])

                print(receivedData)

                #STEP 3 format data
                writable = formatPlayerData(playerList[i], receivedData)

                #STEP 4 print to console
                printDataToScreen()

                #STEP 5 interface with local fs, write to txt file named to convention
                printSaveDataToFile(playerList[i], writable)

                #STEP 6 add to master return container
                flaskOutput +=writable

                #STEP 7 iterate
                i = i + 1

        return flaskOutput
#end fileParse()

"""
param: playerFile
return: flaskOutput:str

purpose: implement methods previously defined in file to interact with RASPIA
        and local file system. Formats and records response from RASPIA using
        a provided username
"""
def nameParse(userName):

        #initialize container for flaskOutput
        flaskOutput: str = "\n\n"

        # stores response from RASPIA into receivedData
        receivedData = getPlayerData(userName)

        print(receivedData)

        # STEP 3 format data
        writable = formatPlayerData(userName, receivedData)

        # STEP 4 print to console
        printDataToScreen()

        # STEP 5 interface with local fs, write to txt file named to convention
        printSaveDataToFile(userName, writable)

        # STEP 6 add to master return container
        flaskOutput += writable

        return flaskOutput
#end nameParse()

"""
END fileRaspia.py

Thank you for using this RASPIA interface

Special thanks to EB3 for RASPIA

source: https://github.com/ed4grrr/RuneScapeAPIAccess
"""