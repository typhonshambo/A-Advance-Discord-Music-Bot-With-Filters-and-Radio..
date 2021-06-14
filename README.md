
# Advanced discord Music Bot

An advanced Music Bot, with 30+ Radio Stations, with capability of filters, like Bassboost, Nightcore, etc. and reaction interactivity. Based on ytdl-core with discord.js Guide Handler. With ideas from eritislami

#### Commands:

- `filter <FILTERNAME>` --    *Set Audio - Effects*
- `loop`                --    *Toggle music loop*
- `lyrics`              --    *Get lyrics for the currently playing song*
- `nowplaying`          --    *Show current song*
- `pause`               --    *Pause the currently playing music*
- `play <TITEL | URL>`  --    *Plays song from YouTube/Stream*
- `queue`               --    *Show the music queue and now playing*
- `radio <RADIOSTATION>`--    *Play a Radiostation*
- `remove`              --    *Remove song from the queue*
- `resume`              --    *Resume currently playing music*
- `search <TITEL | URL>`--    *Search and select videos to play*
- `shuffle`             --    *Shuffles the current Queue!*
- `skip`                --    *Skip the currently playing song*
- `skipto <QUEUE NUM.>` --    *Skip to the selected queue number*
- `stop`                --    *Stops the music*
- `volume <VOL. NUM.>`  --    *Change volume*
- `help [COMMAND]`      --    *Gives you a list of all help Commands*

**NO API-KEY NEEDED!** That's because it uses a scraper (`youtube-sr`)!## Installation | How to use the Bot

 **1.** Install [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Install [ffmpeg@latest](https://ffmpeg.org) 

 **3.** Download this repo and unzip it    |    or git clone it
 
 **4.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install node.js @discordjs/opus discord.js ffmpeg-static figlet lyrics-finder string-progressbar ytdl-core discord-ytdl-core youtube-sr`**
 
 **5.** start the bot with **`node index.js`**
 
 [![Run on Repl.it](https://repl.it/badge/github/navaneethkm004/Music-Bot-With-Filters-v2)](https://repl.it/github/navaneethkm004/Music-Bot-With-Filters-v2)


## **TUTORIAL** 


## Usage - config.json

```json
{
  "TOKEN": "",
  "PREFIX": "+",
  "approveemoji": "EMOJIID",
  "denyemoji": "EMOJIID",
  "erroremoji": "EMOJIID"
}
```

It is important that you fill in every item of the JSON FILE! every emoji used in this BOT is a custom emoji, the emojis are listed down below as images, which you can download and upload to your server to use them. NOTE: you gotta change emoji.id to emoji.name if you use discord / unicode emojis! Soon a new Repo with standard emojis will be awailable for easy usages!

## **NOTE:**

*Make sure that you have installed [FFmpeg](https://ffmpeg.org), and added it to Systemenvironment variables (PATH)*

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*

