var MASTER = function () {
	var _fullClasses = {}, // full json unparsed

		// FILTERABLE BY
		_subjects = [],
		_grades = [],
		_teachers = [],

		// result of filter action 
		_currentSubSet = {};
		
	init();
	
	this.CHEAT = function(){
		return _classes;
	}

	function init(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_classes = res;
			parseTeachersGrades();
		})
	};
	function parseTeachers(){
		console.log('i parse teachers~')
	};
}


window.MASTER = new MASTER();