var chai = require('chai');
var expect = chai.expect;

var nthterm = require('../index');

describe('nthterm', function() {
  it('should work for a linear sequences', function() {
    expect(nthterm([3, 5, 7, 9])).to.equal('2n+1');
  });

  it('should work for simple quadratics', function() {
    expect(nthterm([1, 4, 9, 16, 25])).to.equal('n²');
  });

  it('should work with floating points', function() {
    expect(nthterm([1.5, 2.5, 3.5])).to.equal('n+0.5');
  });

  it('should work with more complex sequences', function() {
    expect(nthterm([22, 51, 96, 157, 234, 327])).to.equal('8n²+5n+9');
  });
});
