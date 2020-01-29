const assert = require('assert');
const calculator = require('./ calculator.js');
describe(’# calculate(expression)’, function() {
  it(’should return 5 when the expression is "3+2"’, function() {
    assert.equal(calculator.calculate('3+2'), 5);
  });
  it(’should return 31 when the expression is "3+2**5+8/4 -2*3"’, function() {
    assert.equal(calculator.calculate('3+2**5+8/4-2*3'), 31);
  });
  it(’should return Infinity when the expression is "34*5+2/0*45-7"’,function() {
    assert.equal(calculator.calculate('34*5+2/0*45-7'), Infinity);
  });
  it(’should return NaN when the expression is "3 -3*1/3 -0*2/0"’, function() {
    assert.equal(isNaN(calculator.calculate('3-3*1/3-0*2/0')), true);
  });
  // self created test functions below
  it(’should return 0.625 when the expression is "2**3/64*5"’, function() {
    assert.equal(calculator.calculate('2**3/64*5'), 0.625);
  });
  it(’should return 3724 when the expression is "6/3*8**3-300*-9"’, function() {
    assert.equal(calculator.calculate('6/3*8**3-300*-9'), 3724);
  });
  it(’should return -98 when the expression is "-10*5+30-60+2*-9"’, function() {
    assert.equal(calculator.calculate('-10*5+30-60+2*-9'), -98);
  });
  it(’should return SyntaxError when the expression is "a * d-4"’, function() {
    assert.equal(calculator.calculate('a * d - 4'), SyntaxError);
  });
  it(’should return SyntaxError when the expression is "5+9*"’, function() {
    assert.equal(calculator.calculate('5+9*'), SyntaxError);
  });
  it(’should return 5 when the expression is "    3 +  2 "’, function() {
    assert.equal(calculator.calculate('    3 +  2 '), 5);
  });
  it(’should return 6 when the expression is "4      + 2"’, function() {
    assert.equal(calculator.calculate('4      + 2'), 6);
  });
  it(’should return SyntaxError when the expression is "a"’, function() {
    assert.equal(calculator.calculate('a'), SyntaxError);
  });
  it(’should return SyntaxError when the expression is ""’, function() {
    assert.equal(calculator.calculate(''), SyntaxError);
  });
  it(’should return NaN when the expression is "4-4*1/5-0*3/0"’, function() {
    assert.equal(isNaN(calculator.calculate('4-4*1/5-0*3/0')), true);
  });
});
