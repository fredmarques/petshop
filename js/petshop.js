function changeMenu(menuitem) {

	// Hide actual buttom
	var menuitens = document.getElementsByClassName("menuitem");
	for(i = 0; i < menuitens.length; i++)
		menuitens[i].className = 'menuitem';
	
	// Show new buttom
	document.getElementById(menuitem).className = 'menuitem active';

	// Hide actual div
	var divitens = document.getElementsByClassName("div-content");
	for(i = 0; i < divitens.length; i++)
		divitens[i].className = 'div-content';

	// Show new div
	document.getElementById(menuitem+'-content').className = 'div-content active-div';
}

function makeLogin() {

	// Getting login data
	var loginname = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;

	// Emptying login data
	document.getElementById('user').value = '';
	document.getElementById('pass').value = '';

	// Alerting user he's logged-in
	alert('Você está logado como '+ loginname)
	document.getElementById('your-name').innerHTML = loginname;

	// Showing logged-in elements
	var loggedInElems = document.getElementsByClassName("logged-in");
	for(i = 0; i < loggedInElems.length; i++)
		loggedInElems[i].style.display = 'block';

	// Hiding not-logged-in elements
	var notLoggedInElems = document.getElementsByClassName("not-logged-in");
	for(i = 0; i < notLoggedInElems.length; i++)
		notLoggedInElems[i].style.display = 'none';

	// Showing admin logged-in elements
	if(loginname == 'admin' && pass == 'admin'){
		var admElems = document.getElementsByClassName("adm");
		for(i = 0; i < admElems.length; i++)
			admElems[i].style.display = 'block';
	}

	// Changing login / logout buttons
	document.getElementById('login').style.display = 'none';
	document.getElementById('logout').style.display = 'block';

}

function logout() {

	// Alerting user he's logged-out
	alert('Você fez logout')

	// Hiding logged-in elements
	var loggedInElems = document.getElementsByClassName("logged-in");
	for(i = 0; i < loggedInElems.length; i++)
		loggedInElems[i].style.display = 'none';

	// Showing not-logged-in elements
	var notLoggedInElems = document.getElementsByClassName("not-logged-in");
	for(i = 0; i < notLoggedInElems.length; i++)
		notLoggedInElems[i].style.display = 'block';

	// Hiding admin logged-in elements
	var admElems = document.getElementsByClassName("adm");
	for(i = 0; i < admElems.length; i++)
		admElems[i].style.display = 'none';

	// Changing login / logout buttons
	document.getElementById('login').style.display = 'block';
	document.getElementById('logout').style.display = 'none';
}