var PacProgress = require('../pacprogress.js');

var chai = require('chai');
var expect = chai.expect;

describe('all props should exit and with defaults if applicable', function() {
  var options = {
    width: 800,
    height: 20
  };
  beforeEach(function() {
    this.pacProgress = new PacProgress('body', options);
  });

  it('.selector attribute should be a string', function() {
    expect(this.pacProgress.selector).to.be.a('string');
  });

  it('.canvasWidth attribute should be a number', function() {
    expect(this.pacProgress.canvasWidth).to.be.a('number');
  });

  it('.canvasHeight attribute should be a number', function() {
    expect(this.pacProgress.canvasHeight).to.be.a('number');
  });

  it('.pacmanColor attribute should be a string and have defaut', function() {
    expect(this.pacProgress.pacmanColor).to.be.a('string');
    expect(this.pacProgress.pacmanColor).to.equal('#fffb00');
  });

  it('.dotColor attribute should be a string and have defaut', function() {
    expect(this.pacProgress.dotColor).to.be.a('string');
    expect(this.pacProgress.dotColor).to.equal('#333333');
  });

  it('.totalDots attribute should be a number and have default', function() {
    expect(this.pacProgress.totalDots).to.be.a('number');
    expect(this.pacProgress.totalDots).to.equal(50);
  });

  it('.dotsGap attribute should be a number', function() {
    expect(this.pacProgress.dotsGap).to.be.a('number');
  });

  it('.pacmanRadius attribute should be a number', function() {
    expect(this.pacProgress.pacmanRadius).to.be.a('number');
  });

  it('.dotRadius attribute should be a number', function() {
    expect(this.pacProgress.dotRadius).to.be.a('number');
  });

  it('.__proto__.draw attribute should be a function', function() {
    expect(this.pacProgress.__proto__.draw).to.be.a('function');
  });

});
