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

var apl = document.getElementsByClassName("aplmain");

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




// new code sending the ontime and offtime as well



// var coll = document.getElementsByClassName("collapsible");
// var i;

// var ref = firebase.database().ref("Room1/Appliance-1/state");
// ref.on("value",function(snapshot){
// 	console.log(snapshot.val());
// 	document.getElementById("switch1").checked = snapshot.val();
// });

// var ref2 = firebase.database().ref("Room1/Appliance-2/state");
// ref2.on("value",function(snapshot){
// 	console.log(snapshot.val());
// 	document.getElementById("switch2").checked = snapshot.val();
// });

// var ref3 = firebase.database().ref("Room1/Appliance-3/state");
// ref3.on("value",function(snapshot){
// 	console.log(snapshot.val());
// 	document.getElementById("switch3").checked = snapshot.val();
// });



// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }

// var apl = document.getElementsByClassName("aplmain");
// var sc = document.getElementsByClassName("sc-btn");

// var scswitch1 = document.getElementById("scswitch1");
// var scswitch2 = document.getElementById("scswitch2");
// var scswitch3 = document.getElementById("scswitch3");


// apl[0].addEventListener("click",function(){
// 	var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[0].innerHTML + m[0].innerHTML;
//     var offtime = h[1].innerHTML + m[1].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-1").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
//     });

// apl[1].addEventListener("click",function(){
//     var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[2].innerHTML + m[2].innerHTML;
//     var offtime = h[3].innerHTML + m[3].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-2").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
//     });

// apl[2].addEventListener("click",function(){
//     var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[4].innerHTML + m[4].innerHTML;
//     var offtime = h[5].innerHTML + m[5].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-3").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
//     });

// scswitch1.addEventListener("click",function(){
// 	var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[0].innerHTML + m[0].innerHTML;
//     var offtime = h[1].innerHTML + m[1].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-1").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
// });

// scswitch2.addEventListener("click",function(){
// 	var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[2].innerHTML + m[2].innerHTML;
//     var offtime = h[3].innerHTML + m[3].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-2").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
// });

// scswitch3.addEventListener("click", function(){
// 	var h = document.getElementsByClassName("hours");
// 	var m = document.getElementsByClassName("minutes");
//     var database = firebase.database().ref();
//     var ontime = h[4].innerHTML + m[4].innerHTML;
//     var offtime = h[5].innerHTML + m[5].innerHTML;
//     if( scswitch1.checked == false)
//     {
// 		offtime = "0000";
// 		ontime = "0000";
//     }
//     var data = {
//         state : document.getElementById("switch1").checked,
//         timeon : ontime,
//         timeoff : offtime
//     };
    
//     database.child("Room1").child("Appliance-3").set(data);
//         this.classList.toggle("aftercollapse");
//         this.classList.toggle("appliance");
// });
