-----
Use the following command to install browserify

npm install -g browserify
-------
Now recursively bundle up all the required modules like main.js into a single file called bundle.js with the browserify command:

browserify main.js -o bundle.js
------
Drop a single tag into your html and you're done!

<script src="bundle.js"></script>