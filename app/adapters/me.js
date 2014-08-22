import Adapter from './application';

export default Adapter.extend({
  buildUrl: function() {
    return '/me.json';
  }
});
