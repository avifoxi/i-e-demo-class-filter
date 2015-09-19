'use strict';

var $ = require('jquery'),
	classFilter = require('./utils/classFilter.js');

var MASTER = function () {
	var _fullClasses = {}, // full object unparsed

		// FILTERABLE BY
		_subjects = [],
		_grades = [],
		_teachers = {}, // obj for access by id

		// for efficient class lookup - does not yet allow teachers w multiple classes though
		_teacherClassMap = {},


		_filter = function(){
		},
		// result of f ilter action 
		_currentSubSet = {};
		
	init();
	
	this.CHEAT = function(){
		console.log(_subjects);
		console.log(_grades);
		console.log(_teachers);
		console.log(_teacherClassMap);
		return _filter;
	}

	function init(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_fullClasses = res;
			parseTeachersGrades();
			_filter = new classFilter( _fullClasses, _teacherClassMap );
		})
	};
	function parseTeachersGrades(){
		var classList = _fullClasses._embedded['class'];
		
		classList.forEach(function(klass){
			var grade = klass.grade,
				teacher = klass._embedded;

			if ( _grades.indexOf( grade ) === -1 ){
				_grades.push( grade );
			}
			if ( teacher ){
				_teachers[ teacher.teacher[0].id ] = teacher.teacher;
				_teacherClassMap[ teacher.teacher[0].id ] = klass.id;
			}
		});
	};

}

window.classFilter = classFilter;
window.MASTER = new MASTER();