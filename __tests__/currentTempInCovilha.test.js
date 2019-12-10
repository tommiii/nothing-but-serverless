const { getCurrentTempInCovilha } = require('../currentTempInCovilha');

test('currentTempInCovilha: returns the an object with temperature (num) and timestamp (num)', async () => {
  const { body } = await getCurrentTempInCovilha();
  const data = JSON.parse(body);
  expect(data).toHaveProperty('temperature');
  expect(data).toHaveProperty('timestamp');
  const { temperature, timestamp } = data;
  expect(typeof temperature).toBe('number');
  expect(typeof timestamp).toBe('number');
});
