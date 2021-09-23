const Suggestions = require("../model/Suggestions");

module.exports = {
	getAllSuggestions: (body, callback) => {
		Suggestions.find(body, function (err, foundSuggestions) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, foundSuggestions);
			}
		});
	},
	getSingleSuggestions: (id, body, callback) => {
		Suggestions.findById(id, body, function (err, foundSuggestions) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, foundSuggestions);
			}
		});
	},
	getSuggestionsByAuthor: (suggestionAuthor, body, callback) => {
        Suggestions.find(suggestionAuthor, body, function (err, foundSuggestions) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, foundSuggestions);
			}
		});
	},
	createSuggestions: (body, callback) => {
		const createdSuggestions = new Suggestions({
			suggestionTitle: body.suggestionTitle,
			suggestionAuthor: body.suggestionAuthor,
			suggestionSuggestion: body.suggestionSuggestion,
			suggestionLikes: body.suggestionLikes,
			suggestionAnonymous: body.suggestionAnonymous,
			timeCreated: body.timeCreated,
		});

		createdSuggestions.save(function (err, savedSuggestions) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, savedSuggestions);
			}
		});
	},
	updateSuggestionsById: (id, body, callback) => {
		Suggestions.findByIdAndUpdate(
			id,
			body,
			{ new: true },
			function (err, updatedSuggestions) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, updatedSuggestions);
				}
			}
		);
	},
	deleteSuggestions: (id, callback) => {
		Suggestions.findByIdAndDelete(id, function (err, deletedSuggestions) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, deletedSuggestions);
			}
		});
	},
};
