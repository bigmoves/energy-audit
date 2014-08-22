import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (email, options) {
  if (email) {
    var hash = md5(email.trim().toLowerCase());
    var baseUrl = "http://www.gravatar.com/avatar/";
    var url = baseUrl + hash;
    var size = options.hash.size;

    url += "?s=" + parseInt(size, 10);
    return new Handlebars.SafeString($("<img>").attr("src", url)[0].outerHTML);
  }
});
