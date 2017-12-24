(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return (root.PacProgress = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = (root.PacProgress = factory());
  } else {
    root.PacProgress = factory(root.postal);
  }
}(this, function() {
  function PacProgress(selector, options) {
    this.selector = selector;
    this.canvasWidth = options.width;
    this.canvasHeight = options.height;
    this.pacmanColor = options.pacmanColor || '#fffb00';
    this.dotColor = options.dotColor || '#333333';
    this.totalDots = options.totalDots || 50;
    this.dotsGap = this.canvasWidth / this.totalDots;
    this.pacmanRadius = this.canvasHeight / 2 < this.dotsGap
      ? this.canvasHeight / 2
      : this.dotsGap - 2;
    this.dotRadius = this.pacmanRadius >= 8 ? 2 : 1;
  }

  PacProgress.prototype.draw = function(percentage) {
    var canvas = $(this.selector)[0];
    var getLatestDotOriginX = function(i) {
      return (i + 0.5) * this.dotsGap - this.dotRadius;
    }.bind(this);

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d'),
        pacmanOriginX = -this.pacmanRadius / 2 +
          percentage * this.canvasWidth / 100;
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      // Pac-dots
      ctx.save();
      ctx.translate(this.dotsGap / 2, this.canvasHeight / 2);
      ctx.fillStyle = this.dotColor;
      for (var i = 0; i < this.totalDots; i++) {
        if (percentage % 2 === 0 &&
          getLatestDotOriginX(i) < pacmanOriginX + this.pacmanRadius
        ) {
          continue;
        } else if (percentage % 2 === 1 &&
          getLatestDotOriginX(i) < pacmanOriginX
        ) {
          continue;
        }
        ctx.save();
        ctx.translate(i * this.dotsGap, 0);
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // Pacman
      ctx.save();
      ctx.translate(
        pacmanOriginX,
        this.canvasHeight / 2
      );
      ctx.fillStyle = this.pacmanColor;
      ctx.beginPath();
      if (percentage % 2 === 0) {
        ctx.arc(0, 0, this.pacmanRadius, 0, Math.PI * 2);
      } else {
        ctx.arc(0, 0, this.pacmanRadius, Math.PI / 7, -Math.PI / 7);
      }
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.restore();
    }
  };

  return PacProgress;
}));
