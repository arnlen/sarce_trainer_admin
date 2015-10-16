import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  answers: DS.attr(),
  correctAnswers: DS.attr(),
  explanation: DS.attr(),
  repositoryId: DS.attr()
});
