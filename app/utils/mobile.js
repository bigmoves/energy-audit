function detectmob() {
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  }
  else {
    return false;
  }
}

export default {
  isMobileDevice: false,
  mobileView: false,

  init: function() {
    var $html = $('html');
    this.isMobileDevice = detectmob();
    this.mobileView = detectmob();

    if (localStorage && localStorage.mobileView) {
      var savedValue = (localStorage.mobileView === 'true');
      if (savedValue !== this.mobileView) {
        this.reloadPage(savedValue);
      }
    }
  },

  toggleMobileView: function() {
    if (localStorage) {
      localStorage.mobileView = !this.mobileView;
    }
    this.reloadPage(!this.mobileView);
  },

  reloadPage: function(mobile) {
    window.location.assign(window.location.pathname + '?mobile_view=' + (mobile ? '1' : '0'));
  }
};
