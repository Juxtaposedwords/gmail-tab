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
for(var i = 0; changed >= 5 || i < divs.length ; i++){
  
  if (typeof(divs[i]) == 'undefined'){
    continue
  }  
  var elm  = document.getElementById(divs[i].id)


  if (elm == null || 
      elm.getAttribute('data-tooltip') =='undefined' ||
      ! (elm.getAttribute('data-tooltip') in originals)){
    continue
  }

   var rep = replacements[originals[elm.getAttribute('data-tooltip')]]
   elm.setAttribute('data-tooltip', rep[1])
   elm.innerHTML = rep[0]
   changed++
}