# Group 25
# Dockerising the project

In order to docker compose the project,  first make sure you have docker installed https://docs.docker.com/get-docker/ .

Once it is installed, open a command prompt inside the `advanced_web_challenges_project` folder and run:

`docker-compose up -d`

## Backend
This will build the images and containers, install dependencies and also run the containers (might take a while on first run).
When the command is finished, the backend will now be accessible in your broweser at `localhost:4000`. For more information on which APIs are accessible through the backend, visit the backend-service folder.

## Orderanalysis
Once you've ran `docker-compose up -d` at least once, run 

`docker-compose run --rm -p 8080:7000 orderanalysis-service python recommendations.py`

Then, in your browser, go to `localhost:8080` and you will receive 5 recommendations based on the item in `recommendations.py`.


## Interface
If you wish to deploy the interface-service through docker, open a command prompt inside the `interface-service` folder and run 

`docker build -t interface .`

After the build is complete, to host the interface run (may take a few minutes)

`docker run --rm -p 3000:3000 interface npm start`

Once this command has fully completed, open `localhost:3000` in your browser to view the interface of the web application.
