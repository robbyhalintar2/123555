# [Dorito Bot Discord.js](https://github.com/Aaronidk/Dorito-bot-discord.js) 

A multipurpose Discord bot with many NSFW and fun commands as well as utility and moderation. 
* Go to []() For a full command list.
* The default prefix is . so a command the help command would be .help 

# [Invite the bot to your server!](https://discordapp.com/oauth2/authorize?client_id=546100087579738133&scope=bot&permissions=506588246) 
* Use if you don't want to follow the steps bellow.

# **Installation guide**
## Getting your credentials:
* Go to the [Discord Developer Portal](https://discordapp.com/developers/applications/)
* Make a new application.
* Go to the bot tab and then click add bot.
### Token
Your token is what you use to log the bot in.
* On the bot tab click copy where it says token.
* Once you have coppied the token you may now paste it into the config file.
* **MAKE SURE YOU PASTE IT BETWEEN THE SPEECH MARKS.**

 ### Your discord ID
 * To get the ID go to discords settings and go to the "Appearance".
 * Once you are on the Appearance tab, scroll down until you find "Developer Mode".
 * Turn on "Developer Mode"
 * Now that Developer Mode is on type a message on any server then right click on your name then click coppy id.
 * Paste the coppied ID into the "devID" section of your config.
 
 * If you followed the stepts correctly the config.json file should now look like this:
  ```js 
  {
  "token": "Your discord token",
  "prefix": "Your prefix",
  "devID": "Your discord id"
   }
  ```
  * You may now save the config and move to the installation process.

## How to install:
1. Install node.js at https://nodejs.org
2. Double click the **install.bat** file and wait for everything to install.
3. Once everything has installed run **start.bat** .
4. Wait for everything to load and the bot should now be up and running.

If you want the node_modules folder to be pre installed instead of running install.bat, go to the [Release page and download the latest zip file](https://github.com/Aaronidk/Dorito-bot-discord.js/releases) 

## Adding the bot to your server:
1. Go back to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and click on your application.
2. Go to the **General Information** tab and you should see your client ID.
3. Click copy.
4. Now that you have your client ID go to this website [Discord Permissions Calculator](https://discordapi.com/permissions.html#305261654)
5. Paste your client ID into where it says **Client ID** then select the permissions you want.
6. Once you have finished doing that click the invite link that the website generated and it should take you to your bots invite page.
7. Invite the bot to your server.
8. Test the bot to see if it works by typing .ping and if the command works then you have completed all the steps correctly.
***If you want to constantly invite the bot to servers keep the link that the permission calculator generated saved somewhere***

# Well Done!
You now have a self hosted working bot on your server!

# Self Hosting: (optional)
If you want more reliable hosting without having it run on your main pc or on your home network, I recommend buying a web server.
The bot can be ran on Linux and Windows.

# Linux Install:
1. Download nodejs
2. Download the bot from the release page.
3. Use the terminal to navigate to the bot folder location where the index is located (dorito.js or index.js)
4. Type npm install
5. To start the bot make sure you're terminal is still navigated to the bot folder then type " node . " or "node index.js " or " node dorito.js "
6. I recommend learning how the terminal works as well as entering directories using cd in the terminal.

# Troubleshooting
If the music commands do not work then it is because FFMPEG was not installed.
You can find many videos on Youtube showing how to install FFMPEG.
Here is one for [Windows](https://www.youtube.com/watch?v=qjtmgCb8NcE)
or you can try type this in the terminal for Linux " npm i ffmpeg "

# API Keys (optional)
* The bot needs an Osu api key so get one and go into the "/commands/utility/" folder and find osu.js.
* Once in the osu.js file you should see text telling you where to paste your api key.
* Now that you finished setting the API key save the the file and run the bot. The osu command should now work.
* If you don't care about the osu command or you don't want to get an api key go into the "/commands/utility/" folder and delete the osu.js command. 

> This Bot was made by [Aaronidk/aaronokiay]().
