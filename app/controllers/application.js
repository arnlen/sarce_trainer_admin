import Ember from 'ember';

export default Ember.Controller.extend({
  pageTitle: "Accueil",
  actions: {
    transitionTo(param) {
      this.set('pageTitle', param)
      this.transitionToRoute(param);
    }
  }
});
