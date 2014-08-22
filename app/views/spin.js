import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['spin-view'],
  size: 'large',
  sizes: {
    large: {
      lines: 11,
      length: 6,
      width: 3,
      radius: 7
    },
    small: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3.5
    }
  },
  didInsertElement: function () {
    var options = {
      lines: 11,
      length: 6,
      width: 3,
      radius: 7,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: "#000",
      speed: .8,
      trail: 61,
      shadow: !1,
      hwaccel: !0,
      className: "spinner",
      zIndex: 1e3,
      top: "auto",
      left: "auto"
    },
    size = this.sizes[this.get('size')];
    Ember.merge(options, size);
    new Spinner(options).spin(this.$()[0]);
  }
});
