// code for login

// var log = document.getElementsByClassName("login-btn");
// var uname = document.getElementById("myTxt");
// var pwd = document.getElementById("myPwd");
// var login = firebase.database().ref("Login/");
// log[0].addEventListener("click", function () {
// 	login.child(uname.value).child("pwd").on("value", function(snapshot){
//     passjson = snapshot;
//     console.log(passjson.val());
// }, function(errorObject){
//     console.log("Unable to read data : " + errorObject);
// });
// 		if(pwd.value == passjson.val())
//         {
// 			console.log("correct Pwd..Logging in!");
//         }
// 		else
//         {
// 			console.log("Incorrect Pwd.. Try Again!");
//         }
// //     window.location.href = "main/main.html";
// });

var log = document.getElementsByClassName("login-btn");

log[0].addEventListener("click", function () {
    window.location.href = "main/main.html";
});
