
<img src="https://fftbg-companion.s3.amazonaws.com/fftbg-companion.png" 
     alt="FFTBG Companion Logo" width="128" height="128">

# FFTBG Companion 1.4.0

FFTBG Companion is a Twitch Extension Overlay for twitch.tv/fftbattleground. 

From the channels' about page: FFTBattleground is an automated stream of continual Final Fantasy Tactics battles, pitting squads of four AI-controlled units against each other in single-elimination tournaments featuring eight teams: Red, Blue, Green, Yellow, White, Black, Purple and Brown. The winner of each tournament earns the right to challenge the current Champion team to seize that position for themselves!

## FFTBG Companion offers viewers:
* Real-time data about the current 8 fighters.
* A light-weight, clean, and responsive UI.
* An alternative to text responses from chat commands.
* Many more features and fun animations coming soon.

## FFTBG Companion would not be possible without:
* **TheKillerNacho**: Operator of the FFTBattleground Twitch channel.
* **SirBraneDamuj**: Creator of mustad.io and allowing me the use of their AWS S3 asset hosting.  Also general inspiration from mustad.io (Great site, check it out!).
* **FinneyBussa**: (github.com/bnowak008) Brilliant web dev and all around good dude.  Assisted in back end proxy hosting and debugging.
For any feedback, feel free to email me @ pdice30@gmail.com or message me on Discord (pdice30).

Special thanks goes to Dice_the_Vice and all the Viceroys!

## Usage

Initially, a user must first click the Show Extension button on the right side of the screen to enable FFTBG Companion.
This can be turned back off by clicking it again.
<img src="https://fftbg-companion.s3.amazonaws.com/ShowExtension.png" 
     alt="FFTBG Companion Logo" width="256" height="128">
<img src="https://fftbg-companion.s3.amazonaws.com/HideExtension.png" 
alt="FFTBG Companion Logo" width="256" height="128">

General Overlay Panel - Displays unit's stats, equipment, and abilities.  Abilities and Equipment can be clicked on for more details.  Primary abilities and secondary abilities (ex: Yin Yang Magic and Battle Skill) can be further examined in a new panel that displays to the right.  Hovering over them presents a tooltip.
<img src="https://fftbg-companion.s3.amazonaws.com/Demo.png" 
     alt="FFTBG Companion Logo" width="600" height="200">



## Build Notes (for me, or you, I guess)
Two lines of the index.html file in the dist output need changing.  Both from '/assets/' to './assets/'.
The asset link to the Altima.ttf file in the build is incorrect for Twitch asset hosting and needs to be just 'url(./Altima-21192d5e.ttf)' (the 'assets' folder is removed)

## Version History

1.4.0:
- Added Tooltips for Class, Monster Class, and Zodiac
- Added Configurable Settings and Options
- Added Current Song - Can also be customized to get a popup when the song changes
- Added ability to view and rotate the Map

1.3.0:
- Adding Tooltips for the Allow Button, and all Class and Extra skills

1.2.0: 
- Removed Warning overlay and replaced it with a red flail warning icon
- Added Compatibility stars
- Removed overlay during "Intermission"
- Some general cleanup and fixes

1.1.0: Moving API from Proxy Server to FFTBG.com

1.0.0: Full Release Version to FFTBattleground

0.0.1: Initial testing version