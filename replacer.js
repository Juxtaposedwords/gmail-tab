var replacements = {
  "primary" : [':2w', "Personal", "Test Data"],
  "social" :  [':2x', "Scheduling", "Messages from social networks, media-sharing sites, online dating services, and other social websites."],
  "promotions" : [':2y', "TBD", "Not currently in use"],
  "updates" : [':2z', "TBD", "Not currently in use"],
  "forums" :  [':30', '/dev/null', "When you have nowhere else to go"]}

for (var key in replacements) {
  var elm  = document.getElementById(replacements[key][0])
  if (elm == null) {
    console.log("the ele for " + key + " was:"+ ele)
    continue
  }
  elm.setAttribute('data-tooltip',replacements[key][2]);
  elm.innerHTML = replacements[key][1]
}
