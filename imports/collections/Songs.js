import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Songs = new Mongo.Collection('songs');

Songs.attachSchema(new SimpleSchema({
	artistId: String,
	albumId: String,
	songId: String,
	name: String
}));
