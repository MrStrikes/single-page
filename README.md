# Single page project
---------------------
The main goal of this project was to make a website, that only loads the ``index.html`` file, and load the template when it's called without refreshing the index.<br>
• What's inside my single page app ?<br>
- Register function :
It push your creditentials into the ``localStorage`` of your browser
- Login function :
It gets the ``localStorage`` datas, and if the values are equivalent, the script will copy the ``localStorage`` datas into the ``sessionStorage``
- Rename function :
You can rename your username. It will be changed in the ``localStorage`` and the ``sessionStorage``
- Logout function :
It delete the keys on the ``sessionStorage`` and put back the links to access the login and register templates.
