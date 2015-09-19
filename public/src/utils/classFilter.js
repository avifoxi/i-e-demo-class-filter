'use strict';

function classFilter ( classList, teacherClassMap ) {
	var _classObj = classListToObj( classList._embedded['class'] ) ,
		_teacherClassMap = teacherClassMap,
		_gradeClassMap = {},
		_subjectClassMap = {};

	function classListToObj( classList ) {
		var classObj = {};
		classList.forEach(function( klass ){
			classObj[ klass.id ] = klass;
		});
		return classObj;
	}

	function addByTeachers( subSet, teacherIds ){
		teacherIds.forEach( function( id ){
			var klassId = _teacherClassMap[ id ];
			subSet[ klassId ] = _classObj[ klassId ];
		})
	};

	function addBySubjects( subSet, subjects ){

	};

	function addByGrades( subSet, grades ){

	};


	return function( args ){
		console.log( _classObj );
		var subSet = {},
			teachers = args.teachers,
			grades = args.grades,
			subjects = args.subjects;

		if ( teachers ){
			addByTeachers( subSet, teachers );
		}
		if ( grades ){
			addByGrades( subSet, grades )
		}

		return subSet;
	}
}

module.exports = classFilter;