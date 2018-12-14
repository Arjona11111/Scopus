// Date/year for copyright
var date = new Date();
var fullYear = date.getFullYear();

function api_key () {
 var myTxt;

 document.getElementById('text').value= myTxt;
 chrome.storage.sync.set({
		myTxt: myTxt,
 });

}



// restore the values stored in chrome.storage.
function restored_options() {
	// write copyright year to options html
	document.getElementById('copyrightYear').innerHTML = fullYear



  chrome.storage.sync.get('myTxt', function(items) {
		document.getElementById(items.myTxt).checked=true

  });
}

$(document).ready(function() {
document.getElementById('text').addEventListener('click', function (event) {
document.getElementById('text').value;
restored_options();
});
}
