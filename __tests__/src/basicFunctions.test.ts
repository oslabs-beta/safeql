import testFunction from '../../src/basicFunction';

describe('this is a cool describe block', () => {

  test('example test!', () => {
    expect(1).toBe(1);
  })

  test('this ones gonna go bad bro', () => {
    expect(1).not.toBe(2);
  })

})

describe('testing our testFunction', () => {
  test('passing the number 2', () => {
    expect(testFunction(2)).toBe(3);
  });
});