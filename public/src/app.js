'use strict';

var $ = require('jquery'),
	classFilter = require('./utils/classFilter.js'),
	SelectCtrl = require('./components/selectCtrl.js'),
	ClassesCtrl = require('./components/classesCtrl.js');

var MASTER = function () {
	var _fullClasses = {}, // full object unparsed
		
		// placeholders for dom component
		_SelectCtrl = {},
		_ClassesCtrl = {},

		_myFilter = function(){}, // placeholder for function
		_subjects = [],
		
		// result of filter action
		_currentSubSet = {};
		

	this.init = function(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_fullClasses = res._embedded['class'];
			_myFilter = new classFilter( _fullClasses, this );
		}.bind(this));
	};
	this.handleFilterables = function( filterables ){
		$.each(filterables.subjects, function(i, sub){
			filterables.subjects[ sub ] = _subjects[ sub ];
		});
		_SelectCtrl = new SelectCtrl( filterables, this );
		_ClassesCtrl = new ClassesCtrl( _fullClasses, _subjects );
	}
	this.handleFilterChange = function( uiState ){
		var notEmpty = {}, key;
		
		for ( key in uiState ){
			if ( uiState[ key ].length > 0 ) {
				notEmpty[ key ] = uiState[ key ];
			}
		}
		var foo = _myFilter( notEmpty );
		debugger;
	};

	this.init();
	
}

window.MASTER = new MASTER();