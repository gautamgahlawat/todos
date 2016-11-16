import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Mongo } from 'meteor/mongo';
 
/*start from here*/

Todos = new Mongo.Collection('todos');
//Template Helpers
Template.main.helpers({
	todos: function() {
		return Todos.find();
	}
});