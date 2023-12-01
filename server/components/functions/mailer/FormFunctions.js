"use strict";

module.exports = {
	containNumbers: function(input) {
		return /\d+/.test(input);
	},
	emailValidator: function(input) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
	},
	phoneValidator: function(input) {
		return /^\+\d{9,20}$/.test(input);
	}
};