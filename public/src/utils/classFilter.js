'use strict';

function classFilter ( classList, teacherClassMap ) {
	var _classList = classList._embedded['class'],
		_teacherClassMap = teacherClassMap;


	function addByTeachers( subset, teachers ){

	};

	function addBySubjects( subset, subjects ){

	};

	function addByGrades( subset, grades ){

	};


	return function( args ){
		var subSet = {},
			teachers = args.teachers,
			grades = args.grades,
			subjects = args.subjects;

		

		return subSet;
	}
}

module.exports = classFilter;