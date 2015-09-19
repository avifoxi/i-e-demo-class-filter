'use strict';

var $ = require('jquery'),
	classFilter = require('./utils/classFilter.js'),
	selectCtrl = require('./components/selectCtrl.js');

var MASTER = function () {
	var _fullClasses = {}, // full object unparsed
		_selectCtrl = {},
		_filter = function(){
		},
		// result of filter action 
		_currentSubSet = {};
		
	
	this.CHEAT = function(){
		return _filter;
	}

	this.init = function(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_fullClasses = res._embedded['class'];
			_filter = new classFilter( _fullClasses, this );
		}.bind(this));
	};
	this.handleFilterables = function( filterables ){
		console.log( filterables );
	}

	this.init();
	
}

window.MASTER = new MASTER();