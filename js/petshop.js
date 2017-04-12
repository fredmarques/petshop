function changeMenu(menuitem) {

	// Hide actual buttom
	var menuitens = document.getElementsByClassName("menuitem");
	for(i = 0; i < menuitens.length; i++)
		menuitens[i].className = 'menuitem';
	
	// Show new buttom
	document.getElementById(menuitem).className = 'menuitem active';

	// Hide actual div
	var divitens = document.getElementsByClassName("div-content");
	for(i = 0; i < menuitens.length; i++)
		divitens[i].className = 'div-content';

	// Show new div
	document.getElementById(menuitem+'-content').className = 'div-content active-div';
}