# PokéIdle

## Description
PokéIdle is a pokemon idle game.
## Current features
So far you're able to create an account using Firebase Authentication. You can pick a starter Pokémon, once a starter has been picked and you have chosen a username, you can start the game. As soon as the game has been started you will be taken to a view. This view is an overview of you and your pokémon. While having the game turned on you and your pokémon start to passevily gain experience points. 

As for gameplay; there is a view consisting of quets you can send you pokemon to. You pick a quest, then a roster from your pokémon, and finally you send them away. The quest has a timer, once the timer is done, your pokemon will be sent back, you and your pokemon will have lost health.

## Planned features
#### Finish the shop
User should be able to, buy and use items baught from the shop.
#### User session 
Make sure once the user has signed in, the user keeps being signed and all user related data is stored.
#### Update database
The database should be updated with all changes to the user during the usage of the app.

## Technologies
#### Framework
- React
#### Authentication
- Firebase
#### Hosting
- Firebase

## Explanation of files
#### Main views
These views have the responsebility of rendering the subpages and initializing their components. They also contain the logic to be passed down to the components, to have them work as intended.
-/profile
-/createProfile
-/quest
-/questDetails
-/shop   