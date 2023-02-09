"use strict";
const trails = [
    {
        "Difficulty": "3",
        "Name": "Awesome Trail",
        "Duration": "2 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "1",
        "Distance": "12m",
        "Elevation": "20m",

    },
    {
        "Difficulty": "2",
        "Name": "Good Trail",
        "Duration": "3 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "4",
        "Distance": "100m",
        "Elevation": "23m"
    },
    {
        "Difficulty": "1",
        "Name": "Best Trail",
        "Duration": "1 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "2",
        "Distance": "60m",
        "Elevation": "40m"
    },
    {
        "Difficulty": "4",
        "Name": "Wow Trail",
        "Duration": "0.5 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "3",
        "Distance": "12m",
        "Elevation": "26m"
    }, {
        "Difficulty": "5",
        "Name": "Foo Trail",
        "Duration": "15 min",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "5",
        "Distance": "12m",
        "Elevation": "35m"
    },
];

var cur = 0;
var prev = cur;
var sec = 0;
var min = 0;
var hr = 0;

function print_f() {
    var key = localStorage.getItem("search");
    if (key == "") {
        print_f_empty();
    } else {
        document.getElementById("Rating").innerHTML = `${hr}:${min}:${sec}`;
        print_search(key);
    }

}

function print_f_empty() {

    var box = document.getElementById("Rating-box");
    box.style.opacity = 1;

}


function print_card(elem) {
    var grid = document.getElementById("simple-grid-i");
    for (var p in elem) {
        var div = document.createElement('div');
        div.innerHTML = `
        <p class="simple-grid-font">
        ${p} : ${elem[p]}
        </p>
        `
        grid.appendChild(div);
    }
}


function print_search(key) {

    for (var i = 0; i < trails.length; i++) {
        if (trails[i].Name.toLowerCase().search(key.toLowerCase()) != -1 || trails[i].Wildlife.toLowerCase().search(key.toLowerCase()) != -1) {
            print_card(trails[i]);
            break;
        }

    }
    if(Math.round(Math.random()) == 1){
        var grid = document.getElementById("simple-grid-i");
        var div = document.createElement('div');
        div.innerHTML = `
            <p class="simple-grid-font" syle="color=red">
            Availaible Fork: Go to Modify and Add the Trail.
            </p>
            `
            grid.appendChild(div);
    }



}
var playing = false;



print_f();


function play() {
    var child = document.getElementById("p");
    var v = "";
    if (playing) {
        v = "play_circle";
        var grid = document.getElementById("simple-grid-i");
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        print_f();
    } else {
        v = "pause_circle";
        document.getElementById("Rating").innerHTML = `01:11:11`;
    }
    child.innerHTML = `<span class="material-symbols-outlined">
    ${v}
    </span>`
    playing = !playing;

}
var pics = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
pics = pics.sort(() => Math.random() - 0.5);
var exp = document.getElementById("expand-grid");
var num_pic = 6;
while(num_pic > 0){
    var img_t = document.createElement('img');
    img_t.src = `./images/${pics[num_pic]}.jpg`;
    img_t.style.height = '100%';
    img_t.style.width = "30vw";
    img_t.style.marginLeft = "5px";
    img_t.style.marginRight = "5px";

    exp.appendChild(img_t);
    num_pic--;
}


var expanded = false;

function expand_func() {
    var expand = document.getElementById("expand-circle");
    if (expanded) {
        collapse_box(expand);
    } else {
        expand_box(expand);
    }
    expanded = !expanded;

}

var initial_box_style = document.getElementById("simple-box-i").style;

function expand_box(e) {
    e.style.transform = "rotate(180deg)";

    var warn = document.getElementById("warning-i");
    var leg = document.getElementById("legend-i");

    warn.style.opacity = 0;
    leg.style.opacity = 0;

    var simple_box = document.getElementById("simple-box-i");
    simple_box.style.position = "fixed";
    simple_box.style.top = "20px";
    simple_box.style.height = "100vh";


}


function collapse_box(e) {
    console.log("collapse");
    e.style.transform = "rotate(0deg)";

    var simple_box = document.getElementById("simple-box-i");
    simple_box.style = initial_box_style;


    var warn = document.getElementById("warning-i");
    var leg = document.getElementById("legend-i");

    warn.style.opacity = 1;
    leg.style.opacity = 1;


}


