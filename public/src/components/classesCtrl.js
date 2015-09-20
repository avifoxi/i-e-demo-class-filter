'use strict';

var $ = require('jquery');
var template = require('lodash').template;

var ClassesCtrl = function( classList, subjects ) {
	var $parent = $('#classDisplay'),
		myTemp = template( $('#classTemplate').html().trim() );

	render( classList );
	
	function render( subSet ){
		var $klasses = subSet.map(function( klass ){
			var $klass = $( myTemp( klass ) );
			
			$klass.data( 'klassId', klass.id );

			// resolve subject by index
			$klass.find('.subject').text( subjects[ klass.subject ] );

			// if teacher assigned
			if ( klass._embedded ) {
				$klass.find('.element-description-sm')
					.text( klass._embedded.teacher[0].name );
			}
			return $klass;
		});
		$parent.append( $klasses );
	}
}

module.exports = ClassesCtrl;