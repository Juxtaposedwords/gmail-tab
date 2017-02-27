var replacements = {
  "primary" : [':2w', "Personal", "Personal isn't the same as important."],
  "social" :  [':2x', "Scheduling", "Cause, remember: no matter where you go... there you are."],
  "promotions" : [':2y', "TBD", "Not currently in use"],
  "updates" : [':2z', "TBD", "Not currently in use"],
  "forums" :  [':30', '/dev/null', "When you've nowhere else to go"]}

for (var key in replacements) {
  var elm  = document.getElementById(replacements[key][0])
  if (elm == null) {
    console.log("the element for " + key + " was not found")
    continue
  }
  elm.setAttribute('data-tooltip',replacements[key][2]);
  elm.innerHTML = replacements[key][1]
}
