var MASTER = function () {
	var _subjects = {},
		_classes = {};
		
	init();
	
	this.CHEAT = function(){
		console.log(_subjects);
		console.log(_classes);
	}

	function init(){
		$.getJSON('./data/subjects.json', function(res){
			_subjects = res;
		});
		$.getJSON('./data/classes.json', function(res){
			_classes = res;
			console.log(res);
		})
	}
}


window.MASTER = new MASTER();