const _ = require('lodash');
const fetch = require('node-fetch');
const error = require('debug')('lamba::error::getCurrentTempInCovilha');
const { Response, insertDocIntoMongoDB } = require('../libs/index');

exports.getCurrentTempInCovilha = async () => {
  try {
    const url = 'https://weather-ydn-yql.media.yahoo.com/public/forecastrss?location=covilha,pt&format=json&u=c'; // u=c means celsius
    const response = await fetch(url);
    const body = await response.json();
    const { current_observation: { condition: { temperature }, pubDate } } = body;
    const NOW = Math.round((new Date()).getTime() / 1000); // unix date
    await insertDocIntoMongoDB({ temperature, timestamp: pubDate, _id: _.uniqueId(NOW) });
    return Response({ statusCode: 200, body: { temperature, timestamp: pubDate } });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: 'InternalServerError' } });
  }
};
