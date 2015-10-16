import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  answers: DS.attr('text'),
  correctAnswers: DS.attr('text'),
  explanation: DS.attr('text'),
  repositoryId: DS.attr('integer')
});
