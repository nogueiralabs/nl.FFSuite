browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    return browser.storage.local.get(['saveData', 'dnt', 'userAgent', 'removeReferrer', 'removeCookie', 'removeAcceptLanguage'])
      .then(function(result) {
        var headers = details.requestHeaders;

        if (result.saveData) {
          headers.push({ name: 'Save-Data', value: 'on' });
        }

        if (result.dnt) {
          headers.push({ name: 'DNT', value: '1' });
        }

        if (result.userAgent) {
          headers.push({ name: 'User-Agent', value: 'Mozilla/5.0 (Android 4.4; Mobile; rv:29.0) Gecko/29.0 Firefox/29.0' });
        }

        if (result.removeReferrer) {
          headers = headers.filter(function(header) {
            return header.name.toLowerCase() !== 'referer';
          });
        }

        if (result.removeCookie) {
          headers = headers.filter(function(header) {
            return header.name.toLowerCase() !== 'cookie';
          });
        }

        if (result.removeAcceptLanguage) {
          headers = headers.filter(function(header) {
            return header.name.toLowerCase() !== 'accept-language';
          });
        }

        return { requestHeaders: headers };
      });
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'requestHeaders']
);
