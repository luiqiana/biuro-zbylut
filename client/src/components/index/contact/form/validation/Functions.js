export function containNumbers(str) {
	return /\d/.test(str);
}

export function countryCode(str) {
	return /^\+\d{0,4}$/.test(str);
}

export function emailValidator(str) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
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

export function removeDash(str) {
	return str.replace(/-/g, '');
}