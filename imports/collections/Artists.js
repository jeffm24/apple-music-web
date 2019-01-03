import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Artists = new Mongo.Collection('artists');

Artists.attachSchema(new SimpleSchema({
	artistId: String,
	name: String
}));
