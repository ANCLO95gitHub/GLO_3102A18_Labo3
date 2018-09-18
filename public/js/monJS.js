window.console.log("DEBUT JS");

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    var li_cnt = 0;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    li[7].style.display = "none";
    debugger;
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length - 1; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; /*cacher*/
            li_cnt++;
        }
    }
    window.console.log( "li_cnt=" + li_cnt );
    if( li_cnt === 7){
        li[7].style.display = "";
        window.console.log( " li[7].style.display   li_cnt=" + li_cnt );
    }
}
function  monOnClick() {
    document.getElementById('myInput').value = "";
    //$("#myInput").val($("#myInput").data("Fiat"));
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName('li');
    li[7].style.display = "none";
}
function myOnClick(){

    let ul = document.getElementById("myUL");
   let li = ul.getElementsByTagName('li');
    for ( var i = 0; i < li.length - 1; i++) {
        li[i].style.display = "";
    }
}

//$(function() {
    "use strict";
    var B = ["Soup", "Juice", "Water", "Others"];
    var selectHTML = "";
    var lesAutos = document.getElementById('lesAutos');

    for (var i = 0; i < B.length; i++) {
        var newSelect = document.createElement('option');
        selectHTML = "<option value='" + B[i] + "'>" + B[i] + "</option>";
        newSelect.innerHTML = selectHTML;
        document.getElementById('lesAutos').add(newSelect);
    }
//});


window.console.log("FIN JS");
