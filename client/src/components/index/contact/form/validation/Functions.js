module.exports = {
	containNumbers: function(str) {
		return /\d/.test(str);
	},
	countryCode: function(str) {
		return /^\+\d{0,4}$/.test(str);
	},
	emailValidator: function(str) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
	},
	phoneChanger: function(str) {
		return str.replace(/[\s-]/g, '');
	},
	phoneValidator: function(str) {
		return /^\d{7,15}$/.test(str);
	},
	removeDuplicates: function(arr) {
		return [...new Set(arr)];
	},
	startWithPlus: function(str) {
		return /^\+/.test(str);
	}
};