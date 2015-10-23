import Ember from 'ember';

export default Ember.Controller.extend({
  pageTitle: "",
  actions: {
    transitionTo(param) {
      this.transitionToRoute(param);
    }
  }
});
