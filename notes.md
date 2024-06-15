This are notes to a presentation I am doing for a job interview.

First of all I want to say I have never used React before this project, so initial work was done to just set up the structure aswell as understanding basic
things like how to call in different files from components ect.

So initialy I tried setting up just a table and call in the API, this was immediatly proven to be more difficult that I'd imagine, as CORP did not let me do that.
(Cross-Origin-Resource-Policy). I needed an mediator from my API calls, to handle some headers (rules) so I could use the API.


Server.js:

This file uses express to set up a node server. It used Node fetch to get the JSON API.
It uses CORS (Cross-Origin Resource Sharing) that allows resources on a web page to be requested from another domain and basicly operates as the middleware.
and it uses Helmet to authenitcate and set up headers for specifically this API, (X-Authentication ..)

This is mostly to get the API itself, I needed another fetch for the images, and I have to admit that chatgpt helped me set up the rules, as I have 
hammering my head against this wall for quite some time.

Other than that, the file sets up a node server with the rules as lax as possible to let me fetch the API and use it for my app.


Fetchdata.js

so when I started the project I figured I could just pull the API to the frontend and use it, however as that did not work, I set up a server as the mediator.
This server takes thing from my API, and then I can easily pull it to the front end from the mediator server, and use it as I want.
It is important to note that the server.js could've been alot larger, as now I have only got the standings in the league to get what the table.

This file uses useState and useEffect hooks from React, which I really like. This was the first file I tried it on and I really enjoyed working with it.

The hooks are basicly just states to produce if the IF STATEMENT in the fetch fails / succseeds.
I produce 3 variables and 3 'functions'
That I then proceed to export to the main file of the app App.js


App.js

Takes in variables from fetchdata.js, and of not error or loading returns the app.
The app consists of Header and Table.


Header.js

Basic header I just wanted to test routes and how they worked, as it was not part of what you guys gave as an assigment I wanted to give the table a flavour of
the premier league colors but integrating it in the table itself was jarring.


UseFavorites.js

Custom hook 'usefav' creates 1 state and 1 state updater. First I get the favorites items from the local storage, then I create an empty variabel that I use as a 
security meassure incase the local storage is empty, and I parse the favorites if they exist, otherwise I create an empty object. This custom hook, runs only once when the 
component is loaded.

Then I use a function which takes in Team ID, and I create a new object which is identical to the current Favorite object (see custom hook). Then its just a simple use of
if its in there change it if /else statement and I set the new object as the favorites object.


Favorites.js

This one acts more like a css file where I use font-awesome to create the star object and I return the button for the table


EditTeamName.js

I do the same as in the useFavorites, just that here I know that 'teams' is populated and it should be run as such. the useState shows initial teams.
Second set of state and state updater has useState null because no teams are being edited. This state is initiliazed on button click edit.
HandleNameChange just appropriatly takes the thing that is happening in the input box and sets the new state to whatever was inputted.
And the HandleSaveClick is very much the same as in favorites, but instead I take in the spread of the teams, aka the entire objects, and change team.team.name
This was apparantly best practices based on mutability


Table.js

Lets talk about the rendering. I have decided to use a map function so I dont have to keep track of every team in the league, so I can just map over the array
If we have a look at the array I have called it teams, which is not... great however I think it still is the best descriptor in this case.

ENCODE URI COMPONENT is a encode, because urls tend to have question marks and or colons, this encodes the url to satisfy any special rules for URLs.
