import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Mongo } from 'meteor/mongo';
 
 
Todos = new Mongo.Collection('todos');