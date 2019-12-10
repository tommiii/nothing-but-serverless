## Available Scripts

In the project directory, you can run:

### `npm run start.local`

Runs the app in the development mode [http://localhost:4000](http://localhost:4000) 
You can test the lambda functions locally with [https://www.getpostman.com/](https://www.getpostman.com/) 

### `serverless deploy`

Deploy on aws 

### `npm run test`

Runs jest test

## Do not forget

### Set your aws variables

Copy and paste the following variable in the same console where you run the app

`export AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY`

`export AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS`

### .evn

`MONGODB_URI` must contain a valid mongodb URI if you want to sava data on mongo db

## API

### GET avgTempInSfax

Returns the temperature (celsius) average, min and max in Sfax, Tunisia in June

### GET currentTempInCovilha

Returns the current temperature (celsius) in Covilha, Portugal and the respective timestamp of the reading. 
Saves the reading on mongodb.