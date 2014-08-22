import Ember from 'ember';

function getGeocode(address) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        resolve(results[0].geometry.location);
      } else {
        reject('Geocode was not successful for the following reason: ' + status);
      }
    });
  });
};

export default Ember.Component.extend({
  elementId: 'map-canvas',
  attributeBindings: ['style'],
  style: 'height:140px; width:100%;',
  map: null,
  zipcode: null,
  didInsertElement: function() {
    var _this = this;
    getGeocode(_this.get('zipcode').toString()).then(function(results) {
      var mapOptions = {
        center: results,
        zoom: 15
      };
      _this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      //_this.map.setCenter(results);
      _this.marker = new google.maps.Marker({
          map: _this.map,
          position: results
      });
    });
  }
});
