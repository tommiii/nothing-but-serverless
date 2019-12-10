const mongoist = require('mongoist');
const trace = require('debug')('libs::trace::insertDocIntoMongoDB');
const error = require('debug')('libs::error::insertDocIntoMongoDB');

const { MONGODB_URI } = process.env;

const Response = (args) => {
  const { statusCode, body, cors } = args;
  const response = {
    body: JSON.stringify(body),
    statusCode,
  };
  if (cors) {
    response.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Max-Age': 600,
    };
  }
  return response;
};

const insertDocIntoMongoDB = async (doc) => {
  try {
    const db = mongoist(MONGODB_URI);
    db.on('connect', () => {
      trace('database connected');
    });
    await db.covilha.insert(doc);
    db.close();
  } catch (err) {
    error(err);
  }
};


exports.Response = Response;
exports.insertDocIntoMongoDB = insertDocIntoMongoDB;
