     ###   #   #          ###   #                                          #
    #   #  #   #         #   #  #                                          #
    #   #  #   #         #   #  # ##    ###    ###   # ##   #   #   ###   ####    ###   # ##   #   #
    #   #  #   #         #   #  ##  #  #      #   #  ##  #  #   #      #   #     #   #  ##  #  #   #
    #   #  #   #         #   #  #   #   ###   #####  #       # #    ####   #     #   #  #      #  ##
    #   #  #   #         #   #  ##  #      #  #      #       # #   #   #   #  #  #   #  #       ## #
     ###    ###           ###   # ##   ####    ###   #        #     ####    ##    ###   #          #
                                                                                               #   #
                                                                                                ###
--------------------------------------------------------------------------------------------------------

This file will help to explain how to best update the Lunar Sooners Website. Unless you are very experienced with HTML and Javascript, please do not change the code files or mess with the format of the properties/config files.

The only files you will have to update are:

+++++++

Website.properties          --- The main file to update. This should be updated for every start party. You have to follow the format #example PlanObs=Orion Nebula,... where the image is Orion_Nebula.jpg and the wiki entry is <https://en.wikipedia.org/wiki/Orion_Nebula>


Catalogue.config            --- The current list of possible sources to observe, update this file when you add more objects. The name of the source must be the same as on Wikipedia.

starpartyhosts.config       --- This list all the past star party hosts, add to it as needed at end of semester

currentschedule.properties  --- This file is for making the schedule for 
                            the upcoming semester, You have to follow the 
                            formatting otherwise it wont appear properly

equipment.config            --- Inventory of all the equipemtn

++++

The rest of the files are as follows:

Welcome.html  	  	    --- the main code for the front page of the website

Hosts.html              --- split up this file so it isn't loaded at one time

photos.html             --- split up this file so it isn't loaded at one time

equipment.html          --- split up this file so it isn't loaded at one time

css/                    --- contains the CSS for all the pages

img/                    --- contains all images for the pages

fonts/                  --- mostly font awesome fonts for the pages

js/                     --- the javascript for the website

PropertiesBackup        --- a backup of the properties and config just incase

