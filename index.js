var searchSelection;
chrome.storage.sync.get('mySrch', function(localdata) {
  let mySrch = localdata.mySrch || 'UA';
	let myImg = chrome.i18n.getMessage('wosALLDB');
	let resetButton = chrome.i18n.getMessage('resetButton');
  let footerSearchMsg = chrome.i18n.getMessage('footerSearch');
  let optionMSG = chrome.i18n.getMessage('optionMSG');
  let placeHolder = chrome.i18n.getMessage('placeHolder');

  // Settings text for popup.html
  $('.searchText').append(`${footerSearchMsg} ${myImg}`);
  $('.btnWS').val(footerSearchMsg);
  $('#myText').val(putApi);
  $('#destApp').val(mySrch);
  $('#inputField').attr("placeholder", placeHolder);
  $('#resetButton').attr("title", resetButton);
  $('#optionMsg').text(optionMSG);
  $('#copyrightYear').text(fullYear);


  // John Nap added this for focus behavior on text input box on pageload,
// give "inputField" text input focus (for cursor)
document.getElementById('inputField').focus();

//on pageload, highlight the "container1" div around the text input field
var xy = document.getElementById('container1');
xy.classList.add('search-criteria-input-wr-f');

//on form Reset, give  "inputField" text input focus (for cursor)
//check to see if the enter key was pressed on Reset button. If so, set focus to text box
  document.getElementById('resetButton').addEventListener('keyup', function (event) {
  if (event.which === 13) {
    document.getElementById('inputField').focus();
  }
});

//check to see if the mouse was clicked on Reset button. If so, set focus to text box
document.getElementById('resetButton').addEventListener('click', function (event) {
  document.getElementById('inputField').focus();
});

//highlight the "container1" div around "inputField" when it gets focus
document.getElementById('inputField').addEventListener('focus', function (event) {
  xy.classList.add('search-criteria-input-wr-f');
});

//unhighlight the "container1" div around "inputField" when it loses focus
document.getElementById('inputField').addEventListener('blur', function (event) {
  xy.classList.remove('search-criteria-input-wr-f');
});
});
