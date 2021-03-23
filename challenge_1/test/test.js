const assert = require('assert');
const app = require('../app.js');

describe('Board Logic', () => {

  it('Should know how to write tests', () => {
     let test = app.BoardLogic.clear();
     assert.equal(test, 1);
  });
});