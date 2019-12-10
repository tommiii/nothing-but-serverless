const error = require('debug')('lamba::error::getAvgTempInSfax');
const { Response } = require('../libs/index');


exports.getAvgTempInSfax = async () => {
  try {
    return Response({ statusCode: 200, body: { min: 19, max: 30, avg: 24.5 } });
  } catch (err) {
    error(err);
    return Response({ statusCode: 500, body: { message: 'InternalServerError' } });
  }
};
