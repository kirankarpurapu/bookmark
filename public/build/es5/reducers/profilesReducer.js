"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	profiles: {},
	profilesArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {

		case constants.PROFILES_RECEIVED:
			var profiles = action.profiles;
			console.log("PROFILES_RECEIVED: " + JSON.stringify(profiles));
			var newState = Object.assign({}, state);
			newState.profilesArray = profiles;

			return newState;

		default:
			return state;
	}
};