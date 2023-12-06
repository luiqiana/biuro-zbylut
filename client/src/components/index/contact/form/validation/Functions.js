/*
module.exports = {
	containNumbers: function(str) {

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
};*/

export function containNumbers(str) {
	return /\d/.test(str);
}

export function countryCode(str) {
	return /^\+\d{0,4}$/.test(str);
}

export function emailValidator(str) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export function phoneChanger(str) {
	return str.replace(/[\s-]/g, '');
}

export function phoneValidator(str) {
	return /^\d{7,15}$/.test(str);
}

export function removeDuplicates(arr) {
	return [...new Set(arr)];
}

export function startWithPlus(str) {
	return /^\+/.test(str);
}