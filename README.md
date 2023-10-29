# Tomi

A discord bot written by Bachoo#0001

Grabs wiki information and packs it back into a nice 'lil embed :)

# setting up: self-hosting on local machine
fork the repo into your own account

Add your discord token to the `.env` file (create if it does not exist):
```
TOKEN=
PREFIX=t!
```

install dependencies using `npm i`

run the program using `node tomi.js` 

#setting up docker

1. Make sure you're in the root directory of the project, then run `docker build . -t tomi`
2. Run the command: `docker run -d --name tomi --restart unless-stopped -e "TOKEN=YOUR TOKEN HERE" tomi`

# contributing

set up a pull request with the features you've added, send a message to me on discord `Bachoo#0001` if its been a while and I havent seen your pull request. 
