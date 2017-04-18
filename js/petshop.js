// Frederico de Azevedo Marques
// 8936926

// Bruno Pinto Ferraz fabri
// 41548844

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
	document.getElementById('your-name-admin').innerHTML = loginname;
	document.getElementById('your-name-user').innerHTML = loginname;

	// Showing logged-in elements for admin
	if(loginname == 'admin' && pass == 'admin') {
	var loggedInElemsAdmin = document.getElementsByClassName("logged-in-admin");
	for(i = 0; i < loggedInElemsAdmin.length; i++)
		loggedInElemsAdmin[i].style.display = 'block';
	} else {
	// Showing logged-in elements for users
	var loggedInElemsUsers = document.getElementsByClassName("logged-in-user");
	for(i = 0; i < loggedInElemsUsers.length; i++)
		loggedInElemsUsers[i].style.display = 'block';
	}
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
	var loggedInElemsAdmin = document.getElementsByClassName("logged-in-admin");
	for(i = 0; i < loggedInElemsAdmin.length; i++)
		loggedInElemsAdmin[i].style.display = 'none';

	var loggedInElemsUser = document.getElementsByClassName("logged-in-user");
	for(i = 0; i < loggedInElemsUser.length; i++)
		loggedInElemsUser[i].style.display = 'none';		

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

function makeNewPet() {
	alert('Você cadastrou seu novo pet');
}

function fillCalendarDays() {
	var today = new Date();
	var block = '<option value="" hidden>Escolha o dia</option>';
	for(i = 0; i < 70; i++){
		today.setDate(today.getDate() + i)
		block += '<option value="">'+translateDay(today.getDay())+', '+today.getDate()+' de '+translateMonth(today.getMonth())+'</option>';
	}

	document.getElementById('day-select').innerHTML = block;
}

function translateDay(day) {
	if(day == 0)
		return 'Domingo';
	else if(day == 1)
		return 'Segunda-feira';
	else if(day == 2)
		return 'Terça-feira';
	else if(day == 3)
		return 'Quarta-feira';
	else if(day == 4)
		return 'Quinta-feira';
	else if(day == 5)
		return 'Sexta-feira';
	else if(day == 6)
		return 'Sábado';
}

function translateMonth(month) {
	if(month == 0)
		return 'Janeiro';
	else if(month == 1)
		return 'Fevereiro';
	else if(month == 2)
		return 'Março';
	else if(month == 3)
		return 'Abril';
	else if(month == 4)
		return 'Maio';
	else if(month == 5)
		return 'Junho';
	else if(month == 6)
		return 'Julho';
	else if(month == 7)
		return 'Agosto';
	else if(month == 8)
		return 'Setembro';
	else if(month == 9)
		return 'Outubro';
	else if(month == 10)
		return 'Novembro';
	else if(month == 11)
		return 'Dezembro';
}

function sub(id) {
	if(document.getElementById(id).value > 0)
		document.getElementById(id).value = (Number(document.getElementById(id).value) - 1); 
}

function add(id) {
	document.getElementById(id).value = (Number(document.getElementById(id).value) + 1); 
}