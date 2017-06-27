# promise-reflex
A helper for event binding with promise.

## Installation

`npm install promise-reflex --save`

## Usage

```javascript
require("promise-reflex");

var til_onesec = () =>
	new Promise((resolve, reject) => setTimeout(resolve, 1000));
var say_heyeayea = () => console.log("heyeayea");

var end = Promise.reflex(a, b);
setTimeout(end, 3500);
```

outputs
```
(delay 1s)heyeayea
(delay 1s)heyeayea
(delay 1s)heyeayea
(delay 0.5s)
```
