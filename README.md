# Procap
Project for visualization of statistical data

The project is not constructed with the public in mind (until after version 0.6 anyway), so the README is not necessarily particularly descriptive.  
It might not make perfect sense for casual readers.  

After forking, the results can be seen by opening the html file in a browser.  
Before doing that, either download the archive from the highchart's web site  
or uncomment the script-tag for their site in the html file and comment out the other script-tag for highcharts.  
The project has only been tested on Firefox.  

Monday
------

-API ok. C  
-JSON parsing. Priorities. H  
-Skip ahead, returning to the libraries later. F  
-Highcharts for visualization. B  
-Installing framework (visualization). A couple of failed attempts (incompatibility errors and similar).  
Eventually opted to use the zipped version, and that seems to be working. G  

Tuesday
-------

-Overview of html examples from highcharts. D  
-Created GitHub repo. F  
-ISSUE: Choosing appropriate gitignore. Chose Node, since it seems like the node.js framework is involved. Is there a better base for the gitignore? C  
-Setting up a local clone of the repo.  D  
-Commiting version 0.1.  
-Made a basic html document for testing. B  
-Highcharts get started setup in progress. H  
-Commiting version 0.2.  

Wednesday
---------

-Looked at a tutorial on JavaScript. D  
-Got "more started" on highcharts. E  

Thursday
--------

-Fixed an error in path to local highcharts dir. Might need to change it again if uploading to the web. H  
-Refactored the README to try to use double spaces instead of br tags. B  
-Refactoring scripted functions into js-files in a new dir. E  
-Getting the scripts correctly into the html file. Resulted in renaming of the html file and discovery of a bug. G  
-Commiting version 0.3  

Friday
------
-Made script to create divs inside a div for displaying charts. Included learning basic debugging of JS. H  
-Commiting version 0.4  
-Made script to enable cycling through charts. H  
-Added more comments to the code. C  
-Commiting version 0.45  
-Made button for cycling through graphs. B  
-Fixed the button so it actually does cycle through graphs. H  
-Removed debugging (console logging) code. B  
-Commiting version 0.5  
-Added another chart based on json-stat (Hurtigruten). H  
-The chart is static and all data included in the js file.  
-Commiting version 0.6

Logging after the initial week will not be done since the secondary part seem to have lost interest in the project.  
Starting from version 0.7, new stuff will be described in the version notes.  

versions
--------

0.1
---

-Preliminary local installation of Highcharts (ignored in repo).  
-Setup of GitHub repo with README and initial gitignore.  

0.2
---

-Made a basic html document, and populated it with data from Highcharts get started section.  

0.3
---

-More orderly and easier customizable code.  
-Possible TODO: Let the user decide the content on the page.  

0.4
---

-Made a script for placing divs inside a div. Can now change the charts by specifying another JS file without changing the html code.  
-Same TODO as 0.3. Should look into using buttons.  

0.45
----

-Made a script for cycling through charts. Will hopefully enable cycling after including a button.  
-Better commented code.  
-TODO is still the same. The button will probably try to reload or render the page again with different initial state.  
-TODO2: Remove/comment out debugging code where appropriate.  

0.5
---

-Has a button that cycles through charts.  
-Removed console logging from debugging.  
-Refactored the divmaker to get rid of existing children before adding new ones.  
-TODO: Attempt to make the selector DRY (has identical js and jquery function). Not a high priority.  
-TODO2: Look into using JSON data to create charts.  

0.6
---

-Contains a chart of actual data from SSB/Hurtigruten along with the other charts.  
-TODO: Make it possible to read the data from file and/or directly from the web api.  
TODO2: Fix a bug that makes the new chart be only half of the desired height.  
TODO3: Apply DRY to the selector.  

0.7
---

-Data is now read from a file. Fixed gitignore to make the file available.  
-TODO: Read data from a website/the API.  
-same TODO2 and TODO3 as before. Should try to make minor version that fixes the concerns.  
TODO4: Try to find out the source of an XML-parsing error. This might incidentally be resolved when the first TODO is resolved.  
