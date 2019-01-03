import { Meteor } from 'meteor/meteor';
import { Songs } from '/imports/collections';

Meteor.publish('Songs', (albumId) => {
	return Songs.find({ albumId });
});
