'use strict';

var $ = require('jquery');
var pairs = require('lodash').pairs;
var without = require('lodash').without;

var selectCtrl = function( filterables, MASTER ) {

	var checkTemp = $('#checkboxTemplate').html().trim(),
		filterableTemp = $('#filterableTemplate').html().trim(),
		$categories = [],
		$parent = $('#filters'),
		_uiState = {};

	render();
	
	function render(){
		var keys = Object.getOwnPropertyNames( filterables );
		
		// create category parent
		$categories = keys.map(function( k ){
			_uiState[ k ] = [];
			var $category = $( filterableTemp ).clone();
			$category.find('h4').text( k );
			
			// attach checkbox children 
			$category.append( renderChecks( k, filterables[ k ] ) );
			return $category;
		});
		// append to dom
		$parent.find('button').after( $categories );
		attachListener();
	};
	function renderChecks( category, options ){
		var keyVals = pairs( options );
		return keyVals.map(function( kv ){
			var $check = $( checkTemp ).clone();
			$check.find('input').attr('name', category);
			$check.find('input').attr('value', kv[ 0 ] );
			$check.find('span').text( kv[ 1 ] );
			
			return $check;
		});
	};
	function attachListener(){
		$parent.change(function( e ){
			var add = e.target.checked,
				key = e.target.name,
				value = e.target.value;

			if ( add ) {
				_uiState[ key ].push( value );
			} else {
				_uiState[ key ] = without( _uiState[ key ], value );
			}
			MASTER.handleFilterChange( _uiState );
		});
	};
}

module.exports = selectCtrl;