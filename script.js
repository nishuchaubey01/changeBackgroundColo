

var index= 0;
function changeColors(){


    var colors =["red", "blue" , "yellow" , "black", "white", "purple" , "orange" , "green", "olive", "brown","pink","sky" ,];

    document.getElementsByTagName("body")[0].style.background=colors[index++];

    if(index>colors.length-1)
    index=0;

    document.getElementById("id")=colors[index+1]
}