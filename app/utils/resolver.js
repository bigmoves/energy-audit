import Resolver from 'ember/resolver';
import Mobile from './mobile';

Mobile.init();

export default Resolver.extend({
  resolveTemplate: function(parsedName) {
    var t = this._super(parsedName);
    if(Mobile.mobileView) {
      parsedName.fullNameWithoutType = parsedName.fullNameWithoutType + '-mob';
      return this._super(parsedName) || t;
    }
    return t;
  }
});
