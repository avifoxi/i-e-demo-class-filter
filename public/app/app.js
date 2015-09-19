'use strict';

var MASTER = function () {
	var _fullClasses = {}, // full json unparsed

		// FILTERABLE BY
		_subjects = [],
		_grades = [],
		_teachers = {}, // obj for access by id

		_teacherClassMap = {},

		// result of filter action 
		_currentSubSet = {};
		
	init();
	
	this.CHEAT = function(){
		console.log(_subjects);
		console.log(_grades);
		console.log(_teachers);
		console.log(_teacherClassMap);
		// return _fullClasses;
	}

	function init(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_fullClasses = res;
			parseTeachersGrades();
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
				// debugger;
				_teachers[ teacher.teacher[0].id ] = teacher.teacher;
				_teacherClassMap[ teacher.teacher[0].id ] = klass.id;
			}
		});
	};
}


window.MASTER = new MASTER();