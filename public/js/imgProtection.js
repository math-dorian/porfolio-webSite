document.addEventListener("contextmenu", event => {
	//console.log(event.target.nodeName);
	if (event.target.nodeName === "IMG") {
		alert('Vous n\'êtes pas autorisés à télécharger ce contenu');
		event.preventDefault();
	}
}, false)
