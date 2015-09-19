'use strict';

function classFilter ( classList, MASTER ) {
	var _classObj = {},
		_teacherClassMap = {},
		_gradeClassMap = {},
		_subjectClassMap = {};

	parseListToMaps( classList );

	function parseListToMaps( classList ){
		// classListToObj( classList )
		// var classList = _fullClasses._embedded['class'];
		var filterables = {
			subjects: [],
			grades: [],
			teachers: []
		};
		classList.forEach(function(klass){
			var subject = klass.subject,
				grade = klass.grade,
				teacher = klass._embedded;

			filterables.subjects.push( subject );
			filterables.grades.push( grade );
			// map to class obj by id
			_classObj[ klass.id ] = klass;

			// map by grade, array of class ids
			if ( !_gradeClassMap[ grade ] ){
				_gradeClassMap[ grade ] = [ klass.id ];
			} else {
				_gradeClassMap[ grade ].push( klass.id );
			}
			// map by teacher id
			if ( teacher ){
				filterables.teachers.push({[ teacher.teacher[0].id ]: teacher.teacher[0].name });
				_teacherClassMap[ teacher.teacher[0].id ] = klass.id;
			}
			// and subject ids
			if ( !_subjectClassMap[ subject ] ) {
				_subjectClassMap[ subject ] = [ klass.id ];
			} else {
				_subjectClassMap[ subject ].push( klass.id );	
			}
		});
		MASTER.handleFilterables( filterables ); 
	};

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