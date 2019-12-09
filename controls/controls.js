var coll = document.getElementsByClassName("collapsible");
var i;

var ref = firebase.database().ref("Room1/Appliance-1/state");
ref.on("value",function(snapshot){
	console.log(snapshot.val());
	document.getElementById("switch1").checked = snapshot.val();
});

var ref2 = firebase.database().ref("Room1/Appliance-2/state");
ref2.on("value",function(snapshot){
	console.log(snapshot.val());
	document.getElementById("switch2").checked = snapshot.val();
});

var ref3 = firebase.database().ref("Room1/Appliance-3/state");
ref3.on("value",function(snapshot){
	console.log(snapshot.val());
	document.getElementById("switch3").checked = snapshot.val();
});


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var apl = document.getElementsByClassName("appliance");

apl[0].addEventListener("click",function(){
    var database = firebase.database().ref();
    var data = {
        state : document.getElementById("switch1").checked
    };
    
    database.child("Room1").child("Appliance-1").set(data);
        this.classList.toggle("aftercollapse");
        this.classList.toggle("appliance");
    });

apl[1].addEventListener("click",function(){
    var database = firebase.database().ref();
    var data = {
        state : document.getElementById("switch2").checked
    };
    
    database.child("Room1").child("Appliance-2").set(data);
        this.classList.toggle("aftercollapse");
        this.classList.toggle("appliance");
    });

apl[2].addEventListener("click",function(){
    var database = firebase.database().ref();
    var data = {
        state : document.getElementById("switch3").checked
    };
    
    database.child("Room1").child("Appliance-3").set(data);
        this.classList.toggle("aftercollapse");
        this.classList.toggle("appliance");
    });
