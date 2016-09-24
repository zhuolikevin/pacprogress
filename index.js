function PacProgress(options) {
    this.canvasWidth = options.width;
    this.canvasHeight = options.height;
    this.pacmanColor = options.pacmanColor || '#fffb00';
    this.totalDots = 50;
    this.dotsGap = this.canvasWidth / this.totalDots;
    this.pacmanRadius = 10;
}

PacProgress.prototype.draw = function(percentage) {
    var canvas = document.getElementById('pac-line');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        // Pac-dots
        ctx.save();
        ctx.translate(this.dotsGap / 2, this.canvasHeight / 2);
        for (var i = Math.floor(percentage / 2); i < this.totalDots; i++) {
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
            (percentage - 1) * this.dotsGap / 2,
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

if (typeof module !== 'undefined') {
    module.exports = PacProgress;
}
