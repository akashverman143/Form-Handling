var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var memberShip = document.getElementById("memberShip");
var submit = document.getElementById("submit");
var form = document.querySelector("form");
var box = document.getElementById("objectDetails");

var myObj = {};


//<-----Change event for user name-------->

form.addEventListener('change', function (e) {
	e.preventDefault();
	if(userName.value.length <= 10) {
      if( userName.value.trim() === "" ) {
        alert( "Please provide your name!" );
        userName.value = " ";
        userAge.disabled = true;
        memberShip.disabled = true;
        submit.disabled = true;
        userAge.className = "changeColor";
        memberShip.className = "changeColor";
        submit.className = "changeColor";
        console.log("a");
        return false;
    } else {
        alert("atleast 10 characters");
        userAge.disabled = true;
        memberShip.disabled = true;
        submit.disabled = true;
        userName.value = "";
        userAge.className = "changeColor";
        memberShip.className = "changeColor";
        submit.className = "changeColor";
        console.log("b");
        return false;     
        //console.log("j");
    }     
	} else {
        userAge.disabled = false;
        memberShip.disabled = false;
        submit.disabled = false;
        userAge.className = "";
        memberShip.className = "";
        submit.className = "";
        console.log("c");
        return;
  }
    
});

//<----------Focusout event for user age---------->

userAge.addEventListener('focusout', function (e) {
	e.preventDefault();
	if (isNaN(userAge.value) || userAge.value < 1 ) {
		  if(userAge.value.trim()  === "") {
        memberShip.disabled = true;
        submit.disabled = true;
        alert("The age should not be blank.");
        userAge.value = "";
        memberShip.className = "changeColor";
        submit.className = "changeColor";
        console.log("d");
        return;
    } else {
        alert("The age must be a number.");
        userAge.value = "";
        submit.disabled = true;
        memberShip.disabled = true;
        memberShip.className = "changeColor";
        submit.className = "changeColor";
        console.log("e");
    } 
	} else {
        submit.disabled = false;
        memberShip.disabled = false;
        memberShip.className = "";
        submit.className = "";
        console.log("f");
  }
});

//<-------Click event for button and geting object value--------->

submit.addEventListener("click", function(e) {
	e.preventDefault();
	myObj.name = userName.value;
	myObj.age = userAge.value;
	myObj.membership = memberShip.value;
	console.log(myObj);
	var para = document.createElement("p");
	para.textContent = "My Object = {  name : " + myObj.name;
	box.appendChild(para);
	var para1 = document.createElement("p");
	para1.textContent = "age : " + myObj.age;
	box.appendChild(para1);
	var para2 = document.createElement("p");
	para2.textContent = "membership : " + myObj.membership + " }";
	box.appendChild(para2);
	box.className = "myObjectDetails";
	userName.value =" ";
	userAge.value = " ";
	memberShip.value = " ";
	console.log(box);
});

//<------change event for making object empty-------->

userName.addEventListener("click", function (e){
	e.preventDefault();
		box.textContent = " ";
		box.className = "changeMyObjectDetails";
})

