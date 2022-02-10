// Complete Day 1 goals here
let songList=["sorry bout that",
"shoota",
"jail",
"whatever"];
let songLength=["306",
"234",
"457",
"226"];
let songLink=[ "https://www.youtube.com/watch?v=5MQAWIqcqZo",
"https://www.youtube.com/watch?v=NrdwFimQ-EQ",
"https://www.youtube.com/watch?v=xTZYykPFa4w",
"https://www.youtube.com/watch?v=Tlf-WBvPxWk"

];
let songImages=["https://media.pitchfork.com/photos/61424a0dad49e98166086fc0/1:1/w_600/100000x100000-999.jpeg",
"https://i1.sndcdn.com/artworks-tiygw70dR6vXWNyN-S5yixQ-t500x500.jpg",
"https://i.ytimg.com/vi/UFfLMhURV9s/maxresdefault.jpg",
"https://i.ytimg.com/vi/_ZIqbl2WH50/maxresdefault.jpg"];

function displaySongInfo() {
    // Complete the Day 2 goals inside this function

}

function emptySongInfo() {
    /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
    $(".songs").empty();
    $(".images").empty();
    $(".artists").empty();
    $(".lengths").empty();
    $(".links").empty();
}

function addSongInfo() {
    // Complete Day 3 goals inside this function
}

$("#add").click(function () {
        emptySongInfo();
        addSongInfo();
        displaySongInfo();
    }

);

displaySongInfo();