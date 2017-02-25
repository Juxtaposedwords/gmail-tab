var replacements = {
  "primary" : [':2w', "Personal", "Test Data"],
  "social" :  [':2x', "Scheduling", "Messages from social networks, media-sharing sites, online dating services, and other social websites."],
  "promotions" : [':2y', "TBD", "Not currently in use"],
  "updates" : [':2z', "TBD", "Not currently in use"],
  "forums" :  [':30', '/dev/null', "When you have nowhere else to go"]}

var label_ids = []
for (var k in replacements){
  label_ids.push(replacements[k][0])
}

for (var key in replacements) {
  if (document.getElementById(replacements[key][0]) == null) {
    console.log(key + " was not found")
    continue
  }
  document.getElementById(replacements[key][0]).setAttribute('data-tooltip',replacements[key][2])
 // document.getElementById(replacements[key][0]) = replacements[key][1]
}