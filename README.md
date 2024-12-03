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

# setting up docker

# setting up docker
1. copy `docker-compose.yml` to `docker-compose.override.yml`
2. edit `docker-compose.override.yml` to have proper environment variables
3. do NOT modify `docker-compose.yml` at all so git has no issues
4. `chmod +x build.sh`
5. run `./build.sh`

# contributing

set up a pull request with the features you've added, send a message to me on discord `Bachoo#0001` if its been a while and I havent seen your pull request. 
