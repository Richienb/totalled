"use strict"

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError("An array of numbers must be provided!")
	}

	return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
