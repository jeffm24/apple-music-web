import { Meteor } from 'meteor/meteor';
import { Artists } from '/imports/collections';

Meteor.publish('Artists', () => {
	return Artists.find();
});
