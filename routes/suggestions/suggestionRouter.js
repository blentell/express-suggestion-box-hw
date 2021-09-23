var express = require("express");
var router = express.Router();
var suggestionController = require("./controller/suggestionController");

/* GET home page. */
router.get("/", function (req, res, next) {
	suggestionController.getAllSuggestions({}, function (err, foundSuggestions) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", foundSuggestions });
		}
	});
});

router.get("/get-suggestions-by-id/:id", function (req, res, next) {
    suggestionController.getSingleSuggestions(
			req.params.id,
			req.body,			
			function (err, foundSuggestions) {
				if (err) {
					res
						.status(500)
						.json({ message: "Something went wrong!", error: err });
				} else {
					res.json({ message: "success!", foundSuggestions });
				}
			}
		);
});

router.get("/get-suggestions-by-author", function (req, res, next) {
	suggestionController.getSuggestionsByAuthor(
		req.query,
		function (err, foundSuggestions) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", foundSuggestions });
			}
		}
	);
});

router.post("/create-suggestions", function (req, res) {
	suggestionController.createSuggestions(
		req.body,
		function (err, savedSuggestions) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", savedSuggestions });
			}
		}
	);
});

router.put("/update-suggestions-by-id/:id", function (req, res) {
	suggestionController.updateSuggestionsById(
		req.params.id,
		req.body,
		function (err, updatedSuggestions) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", updatedSuggestions });
			}
		}
	);
});

router.delete("/delete-suggestions-by-id/:id", function (req, res) {
	suggestionController.deleteSuggestions(
		req.params.id,
		function (err, deletedSuggestions) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", deletedSuggestions });
			}
		}
	);
});
module.exports = router;
