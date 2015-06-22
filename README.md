## Website Performance Optimization portfolio project

### About
This project was to optimize Cameron Pittman's portfolio page() and get it to a high score on Page Speed Insights and run at 60 frames per second using techniques learned from Udacity.

### How to run
You can download the repository and open index.html locally in a browser. You may also check this page out @ http://bpleonvong.github.io/ and use Page Speed Insights to check it out. https://developers.google.com/speed/pagespeed/

###Steps taken to increase productivity of site

Minified CSS, Javascript, and HTML

Inlined some small CSS into the html

Removed some CSS which seems to have no particular visible effect to site: b, strong

Scaled and compressed images

Made the analytics script loading asynchronous

Added a media query to necessary scripts

Removed google font

###Steps taken to increase FPS on main.js for pizza.html

Compressed all images

Rewrote how Pizza Sizes change based on slider

Changed how the update position function is used, reduce variable calls, batch change the style and layout changes


###Things to do

Look for more ways to optimize the FPS on the pizza.html and main.js

Implement what I've learned from optimizing this site into future projects
