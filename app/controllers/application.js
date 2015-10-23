import Ember from 'ember';

export default Ember.Controller.extend({
  pageTitle: "Accueil",
  actions: {
    transitionTo(param) {
      this.transitionToRoute(param);
    }
  }
});
