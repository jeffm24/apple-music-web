import { Meteor } from 'meteor/meteor';
import { Albums } from '/imports/collections';

Meteor.publish('Artists', (artistId) => {
	return Albums.find({ artistId });
});
