import Ember from 'ember';
//import Resolver from 'ember/resolver';
import Resolver from 'energy-audit/utils/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'energy-audit', // TODO: loaded via config
  Resolver: Resolver,
  apiToken: function () {
    return document.cookie ? decodeURIComponent(decodeURIComponent(document.cookie.match(/auth_token=([^;]*)/)[1])) : null;
  }.property()
});

/*
$(document).ajaxSend(function (event, xhr, settings) {
  if(window.EnergyAudit) {
    var apiToken = EnergyAudit.get("apiToken");
    xhr.setRequestHeader("Authorization", "bearer " + apiToken);
  }
});
*/

loadInitializers(App, 'energy-audit');

export default App;
