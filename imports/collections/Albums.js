import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Albums = new Mongo.Collection('albums');

Albums.attachSchema(new SimpleSchema({
	artistId: String,
	albumId: String,
	name: String
}));
