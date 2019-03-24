var originals = {
   "Person-to-person conversations and messages that don't appear in other tabs.": "primary",
   "Messages from social networks, media-sharing sites, online dating services, and other social websites.": "social",
   "Deals, offers, and other marketing emails.": "promotions",
   "Personal, auto-generated updates including confirmations, receipts, bills, and statements.": "updates",
   "Messages from online groups, discussion boards, and mailing lists.": "forums"};

var replacements = {
  "primary" : [ "Personal", "Personal isn't the same as important."],
  "social" :  [ "Scheduling", "Cause, remember: no matter where you go... there you are."],
  "promotions" : [ "TBD", "Not currently in use"],
  "updates" : [ "TBD", "Not currently in use"],
  "forums" :  [ '/dev/null', "When you've nowhere else to go"]};

var changed = 0;
var divs = document.getElementsByTagName("div");
console.log('doing the replacer thing')
for(var i = 0; changed >= 5 || i < divs.length ; i++){
  
  if ( divs[i] == null )  { continue }
  // gives us an cleaner way to access the elements
  var elm  = document.getElementById(divs[i].id)

  //skip if we don't have a tool-tip
  if (elm == null || 
      elm.getAttribute('data-tooltip') =='undefined' ||
      ! (elm.getAttribute('data-tooltip') in originals)){
    continue
  }

  var label = originals[elm.getAttribute('data-tooltip')]
  console.log('attempting to work on : ' + label)
  var newLabel = ''
  var newHoverText = ''
  chrome.storage.local.get([label+'Text', label+'Mouseover'], function(rep){
     // eval("elm.setAttribute('data-tooltip',  rep." + label+ "Mouseover )")
     // eval("elm.innerHTML = rep." + label+ "Text ")
      console.log('sucessfully wrote replacements: '+ rep)
  });
  changed++
}