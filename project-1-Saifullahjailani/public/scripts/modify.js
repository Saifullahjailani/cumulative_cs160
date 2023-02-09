const trails = [
    {
        "Difficulty": "3",
        "Name": "Awesome Trail",
        "Duration": "2 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "1",
        "Distance": "12m",
        "Elevation": "20m"
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

function print_check_box(){
    var flex_box = document.getElementById("simple-box-i");

    for(var i in trails){
        var new_div = document.createElement('div')
        new_div.innerHTML = `
        <div class="check-b-box">
        <input type="checkbox" id="scales" name="trail-names">
        <label for="scales">${trails[i].Name}  </label>
        `;
        flex_box.appendChild(new_div);
    }
}

var compare = []

function compare_selected(){
    var flex_box = document.getElementsByName("trail-names");
    for(var i = 0 ; i < flex_box.length; i++){
        if(flex_box[i].checked == true){
            compare.push(i);
        }
    }

    if(compare.length != 0){
        localStorage.setItem("comp", compare);
        localStorage.setItem("comp_flag", "0");
        window.document.location = "./../comp-sub-menu.html";
    }

}

function compare_all(){
    localStorage.setItem("comp_flag", "1");
    window.document.location = "./../comp-sub-menu.html";
}



print_check_box();