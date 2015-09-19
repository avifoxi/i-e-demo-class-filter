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
			subjects: {},
			grades: {},
			teachers: []
		};

		classList.forEach(function(klass){
			var subject = klass.subject,
				grade = klass.grade,
				teacher = klass._embedded;

			filterables.subjects[ subject ] = subject;
			filterables.grades[ grade ] = grade;
			
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
				// this should be more robust to accept teachers with multiple classes -- but for now, is ok!
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
		subjects.forEach(function( id ){
			var klassIds = _subjectClassMap[ id ];
			addIdsToSubset( subSet, klassIds );
		});
	};

	function addByGrades( subSet, grades ){
		grades.forEach(function( id ){
			var klassId = _gradeClassMap[ id ];
			addIdsToSubset( subSet, klassIds );
		});
	};

	function addIdsToSubset( subSet, klassIds ){
		klassIds.forEach(function( kId ){
			subSet[ kId ] = _classObj[ kId ];
		});
	}

	return function( args ){
		console.log( _classObj );
		var subSet = {},
			teachers = args.teachers,
			grades = args.grades,
			subjects = args.subjects;

		if ( !( teachers || grades || subjects ) ){
			return _classObj;
		}

		if ( teachers ){
			addByTeachers( subSet, teachers );
		}
		if ( grades ){
			addByGrades( subSet, grades );
		}
		if ( subjects ) {
			addBySubjects( subSet, subjects );
		}

		return subSet;
	}
}

module.exports = classFilter;