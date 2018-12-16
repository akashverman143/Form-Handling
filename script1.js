var userName = document.getElementById("userName");
var userAge = document.getElementById("userAge");
var memberShip = document.getElementById("memberShip");
var submit = document.getElementById("submit");
var form = document.querySelector("form");
var box = document.getElementById("objectDetails");

var myObj = {};

function toggleBtnEnableDisable(btnArray, boolValue) {
  btnArray.forEach(function(btn) {
    btn.disabled = boolValue;
  })
}


//<-----Change event for user name-------->

form.addEventListener('change', function (e) {
  e.preventDefault();
	if(userName.value.length <= 10 || userName.value.trim() === '' ) {
    // userAge.disabled = true;
    // memberShip.disabled = true;
    // submit.disabled = true;
    toggleBtnEnableDisable([userAge, memberShip, submit ], true);
    userAge.className = "changeColor";
    memberShip.className = "changeColor";
    submit.className = "changeColor";
    console.log("a");
    userName.value.trim() === '' ? alert( "Please provide your name!" ): alert( "userName  should not be less than 10 char" )
    userName.value = " ";
  } else {
        // userAge.disabled = false;
        // memberShip.disabled = false;
        // submit.disabled = false;
        toggleBtnEnableDisable([userAge, memberShip, submit ], false);
        userAge.className = "";
        memberShip.className = "";
        submit.className = "";
        console.log("c");
  }
  console.log(e.target.value);
console.log(e.target.id);
  if (e.target.id === 'userAge') {
    if (isNaN(userAge.value) || userAge.value < 1 ||userAge.value.trim()  === "") {
        // memberShip.disabled = true;
        // submit.disabled = true;
        toggleBtnEnableDisable([memberShip, submit ], true);
        memberShip.className = "changeColor";
        submit.className = "changeColor";
        console.log("d");
        userAge.value.trim() === '' ? alert( "The age should not be blank." ): alert( "The age must be a number." );
        userAge.value = "";
    } else {
      // submit.disabled = false;
      // memberShip.disabled = false;
      toggleBtnEnableDisable([memberShip, submit ], false);
      memberShip.className = "";
      submit.className = "";
      console.log("f");
    }
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
  para.textContent = "My Object = { \r\n name : " + myObj.name + "\r\n" +" age : " + myObj.age + "\r\n" + " membership : " + myObj.membership + " }";
  para.className = "newLine";
	box.appendChild(para);
	box.className = "myObjectDetails";
	userName.value =" ";
	userAge.value = " ";
	memberShip.value = " ";
  console.log(box);
  console.log(e.target.value);
});

//<------change event for making object empty-------->

userName.addEventListener("click", function (e){
	e.preventDefault();
	box.textContent = " ";
	box.className = "changeMyObjectDetails";
})

