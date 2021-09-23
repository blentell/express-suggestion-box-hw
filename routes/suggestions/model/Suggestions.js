const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema(
	{
		suggestionTitle: {
			type: String,
		},
		suggestionAuthor: {
			type: String,
		},
		suggestionSuggestion: {
			type: String,
		},
		suggestionLikes: {
			type: Number,
			default: 0,
		},
		suggestionAnonymous: {
			type: Boolean,
		},
		timeCreated: {
            type: Date,
            default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("recipe", SuggestionSchema);
