import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    this.controllerFor('application').set('pageTitle', "Accueil");
  }
});
