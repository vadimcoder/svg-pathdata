var assert = chai.assert;

describe("Parsing quadratic bezier curve to commands", function() {

  beforeEach(function() {
  });

  afterEach(function() {
  });

  it("should not work when badly declarated", function() {
    assert.throw(function() {
      new SVGPathData('Q');
    }, SyntaxError, 'Unterminated command at index 0.');
    assert.throw(function() {
      new SVGPathData('Q10');
    }, SyntaxError, 'Unterminated command at index 0.');
    assert.throw(function() {
      new SVGPathData('Q10 10');
    }, SyntaxError, 'Unterminated command at index 0.');
    assert.throw(function() {
      new SVGPathData('Q10 10 10');
    }, SyntaxError, 'Unterminated command at index 0.');
    assert.throw(function() {
      new SVGPathData('Q10 10 10 10 10 10');
    }, SyntaxError, 'Unterminated command at index 0.');
    assert.throw(function() {
      new SVGPathData('Q10 10 10Q10 10 10 10');
    }, SyntaxError, 'Unterminated command at index 9.');
  });

  it("should work with comma separated coordinates", function() {
    var commands = new SVGPathData('Q123,456 789,987').commands;
    assert.equal(commands[0].type, SVGPathData.QUAD_TO);
    assert.equal(commands[0].relative, false);
    assert.equal(commands[0].x1, '123');
    assert.equal(commands[0].y1, '456');
    assert.equal(commands[0].x, '789');
    assert.equal(commands[0].y, '987');
  });

  it("should work with space separated coordinates", function() {
    var commands = new SVGPathData('Q123 456 789 987').commands;
    assert.equal(commands[0].type, SVGPathData.QUAD_TO);
    assert.equal(commands[0].relative, false);
    assert.equal(commands[0].x1, '123');
    assert.equal(commands[0].y1, '456');
    assert.equal(commands[0].x, '789');
    assert.equal(commands[0].y, '987');
  });

  it("should work with nested separated complexer coordinate pairs", function() {
    var commands = new SVGPathData('Q-10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5').commands;
    assert.equal(commands[0].type, SVGPathData.QUAD_TO);
    assert.equal(commands[0].relative, false);
    assert.equal(commands[0].x1, '-10.0032e-5');
    assert.equal(commands[0].y1, '-20.0032e-5');
    assert.equal(commands[0].x, '-30.0032e-5');
    assert.equal(commands[0].y, '-40.0032e-5');
  });

  it("should work with multiple pairs of coordinates", function() {
    var commands = new SVGPathData('Q-10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5\
    -10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5\
    -10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5').commands;
    assert.equal(commands[0].type, SVGPathData.QUAD_TO);
    assert.equal(commands[0].relative, false);
    assert.equal(commands[0].x1, '-10.0032e-5');
    assert.equal(commands[0].y1, '-20.0032e-5');
    assert.equal(commands[0].x, '-30.0032e-5');
    assert.equal(commands[0].y, '-40.0032e-5');
    assert.equal(commands[1].type, SVGPathData.QUAD_TO);
    assert.equal(commands[1].relative, false);
    assert.equal(commands[1].x1, '-10.0032e-5');
    assert.equal(commands[1].y1, '-20.0032e-5');
    assert.equal(commands[1].x, '-30.0032e-5');
    assert.equal(commands[1].y, '-40.0032e-5');
    assert.equal(commands[2].type, SVGPathData.QUAD_TO);
    assert.equal(commands[2].relative, false);
    assert.equal(commands[2].x1, '-10.0032e-5');
    assert.equal(commands[2].y1, '-20.0032e-5');
    assert.equal(commands[2].x, '-30.0032e-5');
    assert.equal(commands[2].y, '-40.0032e-5');
  });

  it("should work with multiple declarated pairs of coordinates", function() {
    var commands = new SVGPathData('Q-10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5\
    q-10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5\
    Q-10.0032e-5,-20.0032e-5 -30.0032e-5,-40.0032e-5').commands;
    assert.equal(commands[0].type, SVGPathData.QUAD_TO);
    assert.equal(commands[0].relative, false);
    assert.equal(commands[0].x1, '-10.0032e-5');
    assert.equal(commands[0].y1, '-20.0032e-5');
    assert.equal(commands[0].x, '-30.0032e-5');
    assert.equal(commands[0].y, '-40.0032e-5');
    assert.equal(commands[1].type, SVGPathData.QUAD_TO);
    assert.equal(commands[1].relative, true);
    assert.equal(commands[1].x1, '-10.0032e-5');
    assert.equal(commands[1].y1, '-20.0032e-5');
    assert.equal(commands[1].x, '-30.0032e-5');
    assert.equal(commands[1].y, '-40.0032e-5');
    assert.equal(commands[2].type, SVGPathData.QUAD_TO);
    assert.equal(commands[2].relative, false);
    assert.equal(commands[2].x1, '-10.0032e-5');
    assert.equal(commands[2].y1, '-20.0032e-5');
    assert.equal(commands[2].x, '-30.0032e-5');
    assert.equal(commands[2].y, '-40.0032e-5');
  });

});