# PokéIdle

## Setup
- Install node.js and npm from https://nodejs.org/en/.
- In the root of the project create a file called ```.env```.
- Add the following variables REACT_APP_FIREBASE_KEY, REACT_APP_FIREBASE_DOMAIN, REACT_APP_FIREBASE_DATABASE, REACT_APP_FIREBASE_DATABASE, REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_SENDER_ID, REACT_APP_FIREBASE_APP_ID.
- Go to firebase and create a project.
- Inside the project click on the cogwheel and then on project settings.
- Set the .env variables equal to the corresponding value from the Firebase sdk snippet.
- Open up a console/terminal window, go to the root of the project and run ```npm install```.
- Run the app with ```npm start```.

## Description
PokéIdle is a pokemon idle game.
## Current features
So far you're able to create an account using Firebase Authentication. You can pick a starter Pokémon, once a starter has been picked and you have chosen a username, you can start the game. As soon as the game has been started you will be taken to a view. This view is an overview of you and your pokémon. While having the game turned on you and your pokémon start to passevily gain experience points. 

As for gameplay; there is a view consisting of quets you can send you pokemon to. You pick a quest, then a roster from your pokémon, and finally you send them away. The quest has a timer, once the timer is done, your pokemon will be sent back, you and your pokemon will have lost health.

## Planned features
#### Finish the shop
User should be able to, buy and use items bought from the shop and the buyable pokemon should vary.
#### User session 
Make sure once the user has signed in, the user keeps being signed and all user related data is stored.
#### Update database
The database should be updated with all changes to the user during the usage of the app.
#### Add UI and improve layout
Add proper UI and improve the layout
#### Drag and drop sorting of pokemon
Drag and drop the pokemon in the roster or pc to sort them.
#### Improve sign in and sign out flow.
Improve sign in and sign out flow.

## Technologies
#### Framework
- React
#### Authentication
- Firebase
#### Hosting
- Firebase
#### Databse
- Firestore

## Explanation of files
#### Main views
These views have the responsebility of rendering the subpages and initializing their components. They also contain the logic to be passed down to the components, to have them work as intended.
- /profile
- /createProfile
    - Sign up page
- /quest
- /questDetails
- /shop
- /login
    - Login page
- /sidebar
- /rosterView
#### Factory
Alle files in /factory are used to create instances of the pokemon data type used in the project.
#### General components
These are presentational components; they are used by the main views to create the content seen one every subpage.
- /generalComponent/avatar
  - Currently only contains an image, is used to display an image from a given src. 
- /generalComponent/bar
  - Renders a bar, fills it based on the precentage given from the props current and max.
- /generalComponent/characterInformation
  - Used to show overview of a character, shows name and level, also shows health and level using the bar component
- /generalComponent/clickable
  - Used as a button, takes in text and a function used on onClick
- /generalComponent/confirmWindow
  - Used when something needs to be confirmed, takes text (explanation of what to confirm), and a function to activate when confirm is clicked
- /generalComponent/detailedQuestInformation 
  - Displays information of a quest, takes in the content to display as text, such as time, difficulty, description, used in /questDetails     
- /generalComponenent/inventoryItem
  - Used to display owned items has a button. Takes item to display as a prop, and what function to call when the button is clicked as a prop.
- /generalComponent/itemDetails
  - Used to display information of an item, information comes from props.
- /generalComponent/linkButton
  - Used to navigate to a different part of the website when clicked.
- /generalComponent/menuToggler
  - Takes in x amount of views, and lets you toggle between them.
- /generalComponent/pokeOptions
  - Used as a container for menuToggler to apply specific game logic, related to a pokémon.
- /generalComponent/popup
  - Used to display a popup.
- /generalComponent/profileOverview
  - Combines avatar and characterInformation to display an overview of a character.
- /generalComponent/questItem
  - Shows a title, difficulty, and an icon. Also has button that takes a callback. Used as a very short overview of a quest.
- /generalComponent/rosterSelector
  - Used as a container for profileOverview, marks the clicked profileOverview, and unmarks once clicked again.
- /genrealComponent/shopItem
  - Used to display a item, has a button that takes it function from a prop.
- /generalComponent/sidebarLink
  - Used as a clickable link to navigate thorugh the website.
- /generalComponent/signOutButton
  - Used to sign out. 
#### Game
The folder /game contains all the files to run the game, such as sending pokémon on quests, and gaining xp, health, etc.
#### Firebase/Firestore/Authentication
- /base.js 
  - Initializes firebase with the appropriate settings.
- /privateRoute.js
  - Makes a route private, only accessible if logged in.
#### Reducers
- /reducers
  - /createProfile
    - Reducers for creating a trainer (user).
  - /pokemon
    - Reducers to keep track of the pokemon stats and status.
  - /quest
    - Reducers for the quest system.
  - /trainer
    - Reducers to keep track of the trainer (user) stats.
#### Other
  - /loadData.js
    - Loads the user's data.
