import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isActive'],
  isActive: false,
  click: function() {
    this.toggleProperty('isActive');
    this.listenForOutsideClick();
  },
  listenForOutsideClick: function() {
    var _this = this;

    function onClick(event) {
      if ($.contains(_this.$()[0], event.target)) {
        return undefined;
      } else {
        _this.set('isActive', false);
        return false;
       }
    }

    function onEscape(event) {
      if (event.keyCode === 27) {
        _this.set('isActive', false);
        return false;
      } else {
        return undefined;
      }
    }

    Ember.run.next(function() {
      $('html').one('click.popup-menu', onClick);
      $('body').on('keydown.popup-menu', onEscape);
    });
  },
  willDestroy: function () {
    $('html, body').off('.popup-menu');
  }
});
