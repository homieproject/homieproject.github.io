var room = document.getElementsByClassName("room");
var i;

for(i=0;i<room.length;i++)
{
    room[i].addEventListener("click", function () {
       window.location.href = "../controls/controls.html"
    });
}