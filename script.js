"use strict";


//To calculate shocks'pair
function getSocksPair(socks) {

    var count = 0;
    var size = 0;
    for (let i = size; i < socks.length;) {
        var temp = socks[i];

        var flag = 0;


        for (var j = size; j < socks.length; j++)
            if (socks[i] == socks[j]) {
                flag++;
            }
        i = i + flag

        count += parseInt(flag / 2)


    }
    if (count != 0)
        alert("Total Number of Pair of Shocks:    " + count)

    else
        alert("No pair formed!")



}


function mySubmit()
{
// alert("submit")
var input=document.getElementById("name").value;
if(input=='')
{
    alert("Please Enter Colors of Shocks!")
    return
}
var nextinput=input.split(",");
getSocksPair(nextinput)


}

function numberPress() {
    const pattern = /[0-9,]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {

        event.preventDefault();
    }


}