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

var c_val = localStorage.getItem("comp").split(",");
const nums = c_val.map(x => parseInt(x));
const flag_all = ((localStorage.getItem("comp_flag") == "1") ? true : false);


if(flag_all){
    for(var i = 0; i < trails.length;i++){
        print_comp(i);
    }
}else{
    for(var i= 0; i< nums.length; i++){
        print_comp(nums[i]);
    }
}


function print_comp(num){
    var p = trails[num];
    var elem = document.getElementById("table-rows");
    var chiled = document.createElement("tr");
    chiled.innerHTML = `
    <th scope="row">${p.Name}</th>
    <td>${p.Difficulty}</td>
    <td>${p.Duration}</td>
    <td>${p.Wildlife}</td>
    <td>${p.Rating}</td>
    <td>${p.Distance}</td>
    <td>${p.Elevation}</td>
    `;
    
    elem.appendChild(chiled);
}


