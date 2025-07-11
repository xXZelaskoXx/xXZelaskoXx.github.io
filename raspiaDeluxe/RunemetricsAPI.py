"""
RunemetricsAPI.py
Runescape API Access -> RASPIA
Edgar Bowlin III

This serves as an easy way to access each Runemetrics API endpoint
https://runescape.wiki/w/Application_programming_interface#Runemetrics.
Credit for the information on how to access APIs goes to the authors of
the above article

Some Endpoints have been left out. They will be added as their function is understood enough
to abstract the parameters like category and table seen in the util.Runescape_Hiscores_URL_Templates.py
file.

"""


from commonImports import URL_Templates, User_Agent_Strings
from _MainAPI import _API



class RunemetricAPI(_API):

    def __init__(self):
        super().__init__()



    def get_player_profile(self, player_name="Zezima") -> list:
        """
        provides the player profile from Runemetrics, as described at
        https://runescape.wiki/w/Application_programming_interface#Profile

        :param URL_template: the url template required for getting player profiles\
            from the runemetrics profile

        :param player_name: string containg the player name in question

        :return: a list of the Runemetric data on the said player, as seen at
            https://runescape.wiki/w/Application_programming_interface#Profile
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_player_URL,
                                                        User_Agent_Strings.runemetrics,
                                                        [player_name])

    def _get_player_monthly_xp(self, player_name: str = "Zezima", skill_id: str = "2") -> list:
        """
        provides the monthly_xp over the last 12 months for the given user
        :param URL_template: the url template required for getting monthly xp totals for a specificed player
            from RuneMetrics
        :param player_name: string containing the player name in question
        :param skill_id: a string containing an int to specific a specific skill, if -1, then overall xp is shown
        :return: a list of timestampped xp gains for the past year as seen at
        https://runescape.wiki/w/Application_programming_interface#Monthly_xp
        """

        return super()._request_and_decode_API_response(URL_Templates.runemetrics_monthly_xp_URL,
                                                        User_Agent_Strings.runemetrics,
                                                        [player_name, skill_id])

    def get_player_quest_data(self, player_name: str = "Zezima") -> list:
        """
        provides the full quest data of a given player
        :param player_name:  the player's username
        :return: a list of quest completion for player
        https://runescape.wiki/w/Application_programming_interface#Quest
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_player_quest_data_URL,
                                                        User_Agent_Strings.runemetrics,
                                                        [player_name])

    def _get_player_count(self) -> list:
        """
        provides the total number of players online between the RS3 and OSRS
        :return: a list containing the number of players online between the two games as seen at
        https://runescape.wiki/w/Application_programming_interface#player_count
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_total_player_count_URL,
                                                        User_Agent_Strings.runemetrics)

    def _get_total_accounts_created(self) -> list:
        """
        provides the total number of accounts created that can access any form of Runescape
        :return: a list containing the number of accounts created
        https://runescape.wiki/w/Application_programming_interface#rsusertotal
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_rsusertotal_URL,
                                                        User_Agent_Strings.runemetrics)

    def _get_NXT_changelog(self) -> list:
        """
        provides the lastest changes to NXT client
        :return: a list of the recent changes to the NXT client
        https://runescape.wiki/w/Application_programming_interface#NXT
        """
        print(URL_Templates.runemetrics_NXT_URL)
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_NXT_URL,
                                                        User_Agent_Strings.runemetrics)

    def _get_windows_installer_info(self) -> list:
        """
        provides the current size and cycling redundancy check code for the Windows installer
            version
        :return: a list containing the above information
        https://runescape.wiki/w/Application_programming_interface#NXT
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_windows_NXT_installer_info,
                                                        User_Agent_Strings.runemetrics)

    def _get_OSX_installer_info(self) -> list:
        """
        provides the current size and cycling redundancy check code for the OSX installer
            version
        :return: a list containing the above information
        https://runescape.wiki/w/Application_programming_interface#NXT
        """
        return super()._request_and_decode_API_response(URL_Templates.runemetrics_OSX_NXT_installer_info,
                                                        User_Agent_Strings.runemetrics)
