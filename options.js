// Saves options to chrome.storage
function save_options() {
  console.log('made  it to sync')
  chrome.storage.sync.set({
    primaryText: document.getElementById('PrimaryText').value,
    primaryMouseover: document.getElementById('PrimaryMouseover').value,
    socialText: document.getElementById('SocialText').value,
    socialMouseover: document.getElementById('SocialMouseover').value,
    promotionsText: document.getElementById('PromotionsText').value,
    promotionsMouseover: document.getElementById('PromotionsMouseover').value,
    updatesText: document.getElementById('UpdatesText').value,
    updatesMouseover: document.getElementById('UpdatesMouseover').value,
    forumsText: document.getElementById('ForumsText').value,
    forumsMouseover: document.getElementById('ForumsMouseover').value,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    primaryText: document.getElementById('PrimaryText').placeholder,
    primaryMouseover: document.getElementById('PrimaryMouseover').placeholder,
    socialText: document.getElementById('SocialText').placeholder,
    socialMouseover: document.getElementById('SocialMouseover').placeholder,
    promotionsText: document.getElementById('PromotionsText').placeholder,
    promotionsMouseover: document.getElementById('PromotionsMouseover').placeholder,
    updatesText: document.getElementById('UpdatesText').placeholder,
    updatesMouseover: document.getElementById('UpdatesMouseover').placeholder,
    forumsText: document.getElementById('ForumsText').placeholder,
    forumsMouseover: document.getElementById('ForumsMouseover').placeholder,
  }, function(items) {
    document.getElementById('PrimaryText').value = items.primaryText;
    document.getElementById('PrimaryMouseover').value = items.primaryMouseover;
    document.getElementById('SocialText').value = items.socialText;
    document.getElementById('SocialMouseover').value = items.socialMouseover;
    document.getElementById('PromotionsText').value = items.promotionsText;
    document.getElementById('PromotionsMouseover').value = items.promotionsMouseover;
    document.getElementById('UpdatesText').value = items.updatesText;
    document.getElementById('UpdatesMouseover').value = items.updatesMouseover;
    document.getElementById('ForumsText').value = items.forumsText;
    document.getElementById('ForumsMouseover').value = items.forumsMouseover;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
