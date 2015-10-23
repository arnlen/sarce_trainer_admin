import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions');
  this.route('new-question');
  this.route('home', { path: '/' });
});

export default Router;
