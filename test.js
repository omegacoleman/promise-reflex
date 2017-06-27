require("./index.js");

var til_onesec = () =>
	new Promise((resolve, reject) => setTimeout(resolve, 1000));
var say_heyeayea = () => console.log("heyeayea");

var end = Promise.reflex(til_onesec, say_heyeayea);
setTimeout(end, 3500);
