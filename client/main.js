import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Mongo } from 'meteor/mongo';
 
/*start from here*/
Todos = new Mongo.Collection('todos');

//Template Helpers
Template.main.helpers({
	todos: function() {
		return Todos.find({}, {sort:{createdAt: -1}});
	}
});

Template.main.events({
	"submit.new-todo": function(event){
		var newtodo = event.target.newtodo.value;
		//event.preventDefault();
		console.log(newtodo);


		Todos.insert({
			text: newtodo,
			createdAt: new Date()
		});

		//Clear Form
		event.target.newtodo.value='';

		//prevent submit
		return false;	
	},
	
	"click.toggle-check": function(){
		Todos.update(this._id,{$set:{checked: !this.checked}});
	},

	

 
});
