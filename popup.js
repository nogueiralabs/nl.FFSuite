document.addEventListener('DOMContentLoaded', function() {
  var saveDataCheckbox = document.getElementById('saveDataCheckbox');
  var dntCheckbox = document.getElementById('dntCheckbox');
  var userAgentCheckbox = document.getElementById('userAgentCheckbox');
  var blockJsCheckbox = document.getElementById('blockJsCheckbox');
  var blockMediaCheckbox = document.getElementById('blockMediaCheckbox');
  var removeReferrerCheckbox = document.getElementById('removeReferrerCheckbox');
  var removeCookieCheckbox = document.getElementById('removeCookieCheckbox');
  var removeAcceptLanguageCheckbox = document.getElementById('removeAcceptLanguageCheckbox');

  browser.storage.local.get().then(function(result) {
    saveDataCheckbox.checked = result.saveData || false;
    dntCheckbox.checked = result.dnt || false;
    userAgentCheckbox.checked = result.userAgent || false;
    blockJsCheckbox.checked = result.blockJs || false;
    blockMediaCheckbox.checked = result.blockMedia || false;
    removeReferrerCheckbox.checked = result.removeReferrer || false;
    removeCookieCheckbox.checked = result.removeCookie || false;
    removeAcceptLanguageCheckbox.checked = result.removeAcceptLanguage || false;
  });

  saveDataCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ saveData: event.target.checked });
  });

  dntCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ dnt: event.target.checked });
  });

  userAgentCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ userAgent: event.target.checked });
  });

  blockJsCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ blockJs: event.target.checked });
  });

  blockMediaCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ blockMedia: event.target.checked });
  });

  removeReferrerCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ removeReferrer: event.target.checked });
  });

  removeCookieCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ removeCookie: event.target.checked });
  });

  removeAcceptLanguageCheckbox.addEventListener('change', function(event) {
    browser.storage.local.set({ removeAcceptLanguage: event.target.checked });
  });
});
