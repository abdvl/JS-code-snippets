# Hangman design

## Data Model and API endpoint

/game_categories
 - id
 - name
 - created_at

/game_inventories
 - id
 - category_id
 - hint
 - word
 - status
 - created_at

// game metadata
/games
 - id
 - category_id
 - game_inventory_id // random generated 
 - guess_count
 - status
 - user_id // enum: in-progress/success/failed
 - guesses:[]
 - word// __x_
 - show_hint:false
 - created_at

/game_activities
 - id
 - game_id
 - type // guess/show_hint/cancel/ join/left
 - payload // guess character / user ID
 - user_id
 - created_at

* /game_users
 - id
 - game_id
 - user_id
 - created_at
 - status // active/ inactive


## API call
### step1 : create game
POST /games
Payload : category_id
Response:
 - id
 - category_id
 - category_name
 - hint
 - guess_count
 - status
 - guesses:[]
 - word// __x_
 - created_at

### step 2 : post guess
Hypertext Application Language (HAL standard)
'embedded resources', but in the examples shown, there doesn't seem to be any way to choose which resources to

POST /game_activities/?embed=game
Payload : 
 - game_id
 - type: guess
 - payload : "a"

Response : 
 - id
 - game_id
 - type // guess/show_hint/cancel/ join/left
 - payload // guess character / user ID
 - game
   - id
   - category_id
   - category_name
   - hint
   - guess_count
   - status
   - guesses:[]
   - word// __x_
   - show_hint:false
   - created_at


## Redux Store
 - game
   - id
   - category_id
   - category_name
   - hint
   - guess_count
   - status
   - created_at
   - word *
 - game_activity
   - show_hint: true/false
   - guesses:[]
   - word

## Actions

type : "create_game"
payload : 
 - category_id

type: "guess"
payload :
 - guess : "x"

type: "show_hint"
