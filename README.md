# hypertube
The Hypertube project invites you to discover an extremely powerful tool category: MVC frameworks. You will learn how to manipulate a MVC, in the language of your choice, to create a streaming site of videos downloaded via the BitTorrent protocol.

## needs

### user interface
- langage EN (by default) / FR
- register :
    - email
    - username
    - firstname
    - lastname
    - secure passsword
    - confirm account email
- OAuth :
    - 42
    - google
- login :
    - connection w/ username or email
    - reset password by email
- connected :
    - logout from any page
    - edit all infos (& picture)
    - see other users pictures & info (username, firstname, lastname)
    - research field

### medias
- homepage :
    - most popular medias
    - mutliple sorts (downloads, peers, seeders, etc.)
- research field :
    - two external sources ([legittorrent](http://www.legittorrents.info) & [archive](https://archive.org))
- medias :
    - thumbnails list
    - infos (production year, IMDb grade, cover img)
    - already watched
    - infinite scroll
    - sorted by (name, genre, IMDb grade, production year)
- media :
    - player
    - summary
    - casting (producer, director, main cast)
    - production year
    - length
    - IMDb grade
    - cover story
    - comments
    - download on server
    - stream seamlessly
    - erase it after a month without a view
    - subtitles
    - video format conversion if needed

### API
- POST oauth/token : Expects client + secret, returns an auth token
- GET /users : returns a list of users with their id and their username
- GET /users/:user_id : returns username, email address, profile picture URL
- PATCH /users/:user_id : Expected data : username, email, password, profile picture URL
- GET /movies : returns the list of movies available on the frontpage, with their id and their name
- GET /movies/:movie_id : return a movie’s name, id, imdB mark, production year, length, available subtitles, number of comments
- GET /comments : returns a list of latest comments which includes comment’s author username, date, content, and id.
- GET /comments/:comment_id : returns comment, author’s username, comment id, date posted
- PATCH /comments/:comment_id : Expected data : comment, username
- DELETE /comments/:comment_id
- POST /comments OR POST /movies/:movie_id/comments : Expected data : comment, movie_id. Rest is filled by the server.

### bonus
- more OAuth
- medias resolutions
- MediaStream (cast?)
- download media
