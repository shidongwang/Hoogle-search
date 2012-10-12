// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {

     var url;
     url = "http://www.haskell.org/hoogle/?hoogle=" + text;
     chrome.tabs.create({url:url});

  });

// search the selected string in Hoogle
function getPage(info, tab, web) {
    var url;
    if (web == "hoogle") {
        url = "http://www.haskell.org/hoogle/?hoogle="; 
    } else { 
        url = "http://www.google.com/?q="; 
    }
    alert(url);
    url += info.selectionText;
    chrome.tabs.create({url:url});
}

var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];

  var id = chrome.contextMenus.create({"title": "Search Hoogle for '%s'", "contexts":[context],
                                       "onclick": function(info, tab){getPage(info, tab, "hoogle");}});
}
