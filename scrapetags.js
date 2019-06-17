function scrapeTags() {

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
