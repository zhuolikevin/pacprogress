# Pacman Progress Bar

An HTML5-based progress bar with [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) animation.

## Installation

Install the component via [npm](https://www.npmjs.com/).

```bash
$ npm install --save pacprogress
```

> Note: **JQuery** is required by the package.

## Usage


1. You can `require` the module under CommonJS standard

    ```javascript
    var PacProgress = require('pacprogress');
    ```

    Or simply include the `script` in your template

    ```html
    <script src="/path/to/pacprogress/index.js"></script>
    ```

1. Initialize a `canvas` tag in your HTML template.

    ```html
    <canvas id="pac-progressbar" width="800" height="20"></canvas>
    ```

    > The width and height can be modified due to your app's needs. However, a width not less than 100 and height not less 10 is preferred for better animation performance.

1. Construct a `PacProgress` object with `selector` and `options`. Detailed `options` can be found in API part.

    ```javascript
    var pacProgress = new PacProgress('#pac-progressbar', {
    	width: 800,
    	height: 20,
    	totalDots: 30
    });
    ```

1. Draw the progress bar with your `percentage`

    ```javascript
    pacProgress.draw(25);
    ```

## API
