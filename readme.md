Squarespace encourages using tags liberally but the interface makes it an absolute pain to actually manage and modify them. This lists them all out in the console to avoid having to scroll through the input field to see them.

## How to Use the scrapeTags Script

The scrapeTags script was written to make it easier to list out the tags on a given SquareSpace page. This script was developed to be run in the console of a web browser—specifically Google Chrome—and can be used a few different ways.

First, here's the script:

```function scrapeTags() {

var tagItems = document.getElementsByClassName("tag-field-container")[0].children;

var itemArray = Array.from(tagItems);

var tagArray = [];


itemArray.forEach(function (item, index) {
    tagArray.push(item.innerHTML);
});

var tagList = tagArray.join(", ");
return tagList;

}
scrapeTags();
```

The simplest way to use it is to paste it into the Javascript Console whenever you want to use it. In Google Chrome, you can access the console under the View -> Developer menu.
<p align="center">
<img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/access-console.png" alt="Access Console in Chrome" width="75%"/>
  </p>

### Copy/Paste Method
* Open the entry that you want to edit in Squarespace. 
* Open the Javascript Console. Once you’ve opened it, you can keep it open and continue to use that window for working on additional entries.
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/console-open.png" alt="Javscript Console open in Chrome" width="75%"/></p> 
* Copy the script and paste it into the console on the input line—which is denoted by a blue arrow—and press enter.
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/script-in-console.png" alt="Script in console" width="75%"/></p> 
* The keywords should be returned on the following line(s), and you can use that list to compare or add keywords in Knack. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/script-with-tags-returned.png" alt="Script with tags returned" width="75%"/></p> 
* Now that the script has been input in the console, the next time you want to use it you can press the up arrow on your keyboard to recall it. You can also type in `scrapeTags();` to use it. If for some reason this doesn’t work, you can always recopy/paste it in.

### Sources Method
This approach allows you to save the script in the console so you don’t have to manually add the script each time. First, you’ll need to create a snippet in the console’s sources. 
* Open the Javascript Console and click on the Sources tab. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/sources-open.png" alt="Access sources in console" width="75%"/></p> 
* Create a new snippet and copy/paste the script into the snippet window. Now, anytime you want to use it you can access the script from here. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/new-snippet.png" alt="Create a snippet in console" width="75%"/></p>

To use the script when saved in Sources:
* Open the entry that you want to edit in Squarespace.
* Open the Javascript Console.
* Go to the Sources tab.
* Right click on the name of the snippet and click Run to use it. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/run-snippet.png" alt="Run snippet" width="75%"/></p> 
* Go back to the Console tab where the keywords will be output. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/tags-returned.png" alt="Keywords returned" width="75%"/></p>
* Now that the script has been input in the console, the next time you want to use it you can type in `scrapeTags();` to use it. After that you can press the up arrow on your keyboard to recall it. If for some reason this doesn’t work, you can always rerun it from the Sources tab or even just copy and paste it in. 
  <p align="center"><img src="https://github.com/camcreates/squarespace-scrapetags/blob/master/img/script-name-tags-returned.png" alt="Call script using name" width="75%"/></p>

