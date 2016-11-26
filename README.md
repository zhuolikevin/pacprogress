# Pacman Progress Bar

An HTML5 canvas-based progress bar with [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man) animation.

## Installation

1. Install the component via [npm](https://www.npmjs.com/).

	```bash
	$ npm install --save pacprogress
	```

1. Include `pacprogress.js` to your project.
	
	```html
	<script src="/path/to/pacprogress.js"></script>
	```

> Note: **JQuery** is required by the package.

## Usage


1. You can `require` the module under CommonJS standard

    ```javascript
    var PacProgress = require('pacprogress');
    ```

    Or `define` it via AMD
    
    ```javascript
    require.config({
      paths: {'pacprogress': '/path/to/pacprogress.js'}
    });
    
    define(['pacprogress'], function(PacProgress) {
      // Your codes
    });
    ```
    
    If you are not using any module loader, a global variable `window.PacProgress` is exposed by us. **Use It Directly!**

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

The progress object is initialized like:

```javascript
var pacProgress = new PacProgress(selector, options);
```

where `selector` is a jQuery selector used to target your `<canvas>`, while `options` can be configured with following APIs.

| Props | Type | Description | Default Value |
|-------|------|-------------|---------|
| width | Number | *Required*. Width of the canvas | N/A |
| height | Number | *Required*. Height of the canvas | N/A |
| pacmanColor | String | Color of the pacman | '#fffb00' |
| totalDots | Number | Total number of dots in the progressbar | 50 |
