# km-server
Knowledge Maps Server 

This repo houses the server for Knowledge Maps platform and has the km-client linked as a submodule. 

## Setup instructions
1. Clone the repository using: 
### `git clone --recursive https://github.com/NUDelta/km-server.git`
The recursive flag is important because it downloads the km-client as a submodule

2. Install node modules in km-server directory using:
### `npm install`

3. Install nodemon node module in km-server directory using:
### `sudo npm install -g --force nodemon`

4. Install node modules in km-client directory using:
### `npm install`

## Start the Knowledge Maps tool
cd to the main directory then run
### `npm run dev`

Runs the server in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
