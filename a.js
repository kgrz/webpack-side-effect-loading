// Webpack won't be able to tell if React does or doesn't have any side
// effects, and relies on the `sideEffects` flag in package.json to know this.
// You should see the same effect in work if you comment out the React import
// and uncomment the d.js import. In the final output under dist/main.js,
// you'll see that the IIFE inside the `d.js` module will show up, even if none
// of the code from `a.js` gets loaded by the entry file.
import React from 'react';
// import d from './d';


export default function hi() {
	console.log('I am in A');
}
