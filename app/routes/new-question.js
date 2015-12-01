import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('question');
  },
  afterModel() {
    this.controllerFor('application').set('pageTitle', "Nouvelle question");
  }
});
