const { getAvgTempInSfax } = require('../avgTempInSfax');

test('getAvgTempInSfax: returns an object like { min: 19, max: 30, avg: 24.5 }', async () => {
  const { body } = await getAvgTempInSfax();
  const data = JSON.parse(body);
  expect(data).toStrictEqual({ min: 19, max: 30, avg: 24.5 });
});
