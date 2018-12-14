// // start code block for right click to search
// chrome.runtime.onInstalled.addListener(function() {
//   let context = "selection";
//   let title = chrome.i18n.getMessage('contextLabel');
//   let id = chrome.contextMenus.create({
//     "title": title,
//     "contexts":[context],
//     "id": "context" + context
//   });
// });
//
// chrome.contextMenus.onClicked.addListener(onClickHandler);
//
// // The onClicked callback function.
// function onClickHandler(info, tab) {
//   var sText = info.selectionText;
//
//   // Selected text is scrubbed of the following characters,
//   // which otherwise cause the right-click search to fail: = , " , ( , ) , “ , ”
//   sText = sText.replace(/[="()“”]/g,'');
//   let restoreSearch;
//   let url;
//   let destApp;
//
//   chrome.storage.sync.get('restoreSearch', function(localdatastore) {
//     restoreSearch = JSON.stringify(localdatastore.restoreSearch);
//
//     if (restoreSearch == null || restoreSearch == '"search1"') {
//       destApp = "UA"
//     } else {
//       destApp = "WOS"
//     }
//     url = [
//       "http://gateway.isiknowledge.com/gateway/Gateway.cgi?GWVersion=2&SrcApp=ChromeWebApp",
//       "&SrcAuth=Clarivate&DestApp=" + destApp + "&DestLinkType=GeneralSearchSummary&topic=",
//       encodeURIComponent(sText) + "&btnWS=Search"
//     ].join('');
//
//     trackOutboundLink(url,sText);
//   });
// };
//
// // // external link tracker function
// // var trackOutboundLink = function(url,sText) {
// //   ga('send', 'event', 'right-click search', 'search', sText, {
// //     'transport': 'beacon',
// //     'hitCallback': function(){window.open(url, '_blank');}
// //   });
// // }
// // // end of external link tracker function
//
// // Background page ga view/event message listener from extension pages or content scripts
// // chrome.runtime.onMessage.addListener(
// //   function(request, sender, sendResponse) {
// //   //   if (request.foundid == "UT") {
// // 	// 	sendResponse({logmsg: "GA event logged."});
// // 	// 	ga('send', 'event', 'UT found on page', 'lookup');
// // 	//  }
// // 	//   if (request.foundid == "doi") 	{
// // 	// 	sendResponse({logmsg: "GA event logged."});
// // 	// 	ga('send', 'event', 'DOI found on page', 'lookup');
// // 	// }
// // 	if (request.pageview == "popup.html") 	{
// //     ga('send', 'pageview', '/popup.html');
// //     sendResponse({logmsg: "GA event logged: pageview for /popup.html"});
// // 	}
// // 	if (request.pageview == "options.html") 	{
// //     ga('send', 'pageview', '/options.html');
// //     sendResponse({logmsg: "GA event logged: pageview for /options.html."});
// // 	}
// //   });
// // end ga message listener
